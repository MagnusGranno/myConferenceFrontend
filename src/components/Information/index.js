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
  const [confLoading, setConfLoading] = useState(true);
  const [speakerloading, setSpeakerLoading] = useState(true);
  const [singleSpeakerloading, setSingleSpeakerLoading] = useState(true);
  const [talkLoading, setTalkLoading] = useState(true);

  // // Should i be shown?
  // const [showTalk, setShowTalk] = useState(false);
  // const [showTalkBySpeaker, setShowTalkBySpeaker] = useState(false);

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
      setConfLoading(true);
    } else {
      setConfLoading(false);
    }
  }, [conferences]);

  useEffect(() => {
    if (talkById.length < 1) {
      setTalkLoading(true);
    } else {
      setTalkLoading(false);
    }
  }, [talkById]);

  useEffect(() => {
    if (!loggedIn) {
      navigate('/');
    }
  }, [loggedIn]);

  const fetchTalkById = async (id) => {
    setTalkLoading(true);
    const response = await facade.fetchTalkById(id);
    setTalkById(response);
    setTalkLoading(false);
    return response;
  };

  const fetchConferences = async () => {
    setConfLoading(true);
    const response = await facade.fetchConferences();
    setConferences(response);
    setConfLoading(false);
    return response;
  };

  const fetchTalkBySpeaker = async (id) => {
    setSingleSpeakerLoading(true);
    const response = await facade.fetchTalkBySpeaker(id);
    setTalksBySpeaker(response);
    setSingleSpeakerLoading(false);
    return response;
  };

  const fetchAllSpeakers = async () => {
    setSpeakerLoading(true);
    const response = await facade.fetchAllSpeakers();
    setSpeakers(response);
    setSpeakerLoading(false);
    return response;
  };

  return (
    <InfoBody>
      <Wrapper>
        <VerticalWrapper>
          <Conferences
            conferences={conferences}
            Loading={confLoading}
            setTalkById={setTalkById}
            fetchTalkById={fetchTalkById}
            setSelectedConf={setSelectedConf}
          />
          <Speakers
            speakers={speakers}
            setSelectedSpeaker={setSelectedSpeaker}
            loading={speakerloading}
            fetchTalkBySpeaker={fetchTalkBySpeaker}
          />
        </VerticalWrapper>
        <VerticalWrapper>
          {!talkLoading && (
            <TalkById
              talkById={talkById}
              loading={talkLoading}
              selectedConf={selectedConf}
              fetchTalkBySpeaker={fetchTalkBySpeaker}
              setSelectedSpeaker={setSelectedSpeaker}
            />
          )}
          {!singleSpeakerloading && (
            <TalkBySpeaker
              loading={singleSpeakerloading}
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
