import { useState, useEffect } from 'react';

// styles
import { Wrapper, InfoBody, VerticalWrapper } from './Information.styles';

// Router
import { useNavigate } from 'react-router-dom';

// components
import Spinner from '../Spinner';

// facade
import { facade } from '../../apiFacade';
import Conferences from '../Conferences';
import TalkById from '../TalkById';

const Information = ({ loggedIn }) => {
  const navigate = useNavigate();
  const [conferences, setConferences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [talkById, setTalkById] = useState([]);
  const [showTalk, setShowTalk] = useState(false);
  const [selectedConf, setSelectedConf] = useState({
    name: '',
    location: '',
    capacity: 0,
    date: '',
    time: 0,
  });

  useEffect(() => {
    fetchConferences();
  }, []);

  useEffect(() => {
    if (conferences.length < 1) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [conferences]);

  useEffect(() => {
    if (!loggedIn) {
      navigate('/');
    }
  }, [loggedIn]);

  const fetchTalkById = async (id) => {
    const response = await facade.fetchTalkById(id);
    setTalkById(response);
    setShowTalk(true);
    return response;
  };

  const fetchConferences = async () => {
    const response = await facade.fetchConferences();
    setConferences(response);

    return response;
  };

  return (
    <InfoBody>
      <Wrapper>
        <VerticalWrapper>
          {conferences.length < 1 ? (
            <Spinner size={'150px'} />
          ) : (
            <Conferences
              conferences={conferences}
              loading={loading}
              setTalkById={setTalkById}
              fetchTalkById={fetchTalkById}
              setSelectedConf={setSelectedConf}
            />
          )}
        </VerticalWrapper>
        <VerticalWrapper>
          {showTalk && (
            <TalkById
              talkById={talkById}
              loading={loading}
              setLoading={setLoading}
              selectedConf={selectedConf}
            />
          )}
        </VerticalWrapper>
      </Wrapper>
    </InfoBody>
  );
};

export default Information;
