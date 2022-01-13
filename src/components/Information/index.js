import { useState, useEffect } from 'react';

// styles
import { Wrapper, InfoBody, VerticalWrapper } from './Information.styles';

// Router
import { useNavigate } from 'react-router-dom';

// components
import Spinner from '../Spinner';
import TalkById from '../TalkById';
import TalkBySpeaker from '../TalkBySpeaker';
import Conferences from '../Conferences';
import Speakers from '../Speakers';

// facade
import { facade } from '../../apiFacade';

const Information = ({ loggedIn }) => {
  // Used if we are logged out or token expires
  const navigate = useNavigate();

  // Api data
  const [conferences, setConferences] = useState([]);
  const [talkById, setTalkById] = useState([]);
  const [talksBySpeaker, setTalksBySpeaker] = useState([]);
  const [speakers, setSpeakers] = useState([]);

  // Fetch taking too long?
  const [loading, setLoading] = useState(true);

  // Should i be shown?
  const [showTalk, setShowTalk] = useState(false);
  const [showTalkBySpeaker, setShowTalkBySpeaker] = useState(false);

  // Selected conference
  const [selectedConf, setSelectedConf] = useState({
    name: '',
    location: '',
    capacity: 0,
    date: '',
    time: 0,
  });
  const [selectedSpeaker, setSelectedSpeaker] = useState({});

  useEffect(() => {
    fetchConferences();
    fetchAllSpeakers();
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

  const fetchTalkBySpeaker = async (id) => {
    setShowTalkBySpeaker(false);
    const response = await facade.fetchTalkBySpeaker(id);
    setTalksBySpeaker(response);
    setShowTalkBySpeaker(true);
    return response;
  };

  const fetchAllSpeakers = async () => {
    const response = await facade.fetchAllSpeakers();
    setSpeakers(response);
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
          {speakers.length < 1 ? (
            <Spinner size={'150px'} />
          ) : (
            <Speakers
              speakers={speakers}
              setSelectedSpeaker={setSelectedSpeaker}
              loading={loading}
              setLoading={setLoading}
              fetchTalkBySpeaker={fetchTalkBySpeaker}
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
              fetchTalkBySpeaker={fetchTalkBySpeaker}
              setSelectedSpeaker={setSelectedSpeaker}
            />
          )}
          {showTalkBySpeaker && (
            <TalkBySpeaker
              loading={loading}
              talksBySpeaker={talksBySpeaker}
              selectedSpeaker={selectedSpeaker}
            />
          )}
        </VerticalWrapper>
      </Wrapper>
    </InfoBody>
  );
};

export default Information;
