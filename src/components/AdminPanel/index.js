import { useState } from 'react';

// Facade
import { facade } from '../../apiFacade';

// Styles
import {
  AdminBody,
  Wrapper,
  VerticalWrapper,
  CreateDiv,
  CreateForm,
} from './AdminPanel.styles';

const AdminPanel = () => {
  const ccState = {
    name: '',
    capacity: 1000,
    location: '',
    year: 2022,
    month: 1,
    date: 1,
    time: '',
  };
  const ctState = {
    topic: '',
    duration: 0,
    props_list: '',
  };
  const csState = {
    name: '',
    company: '',
    profession: '',
    gender: '',
  };
  const [cError, setCError] = useState('');
  const [cSuccess, setCSuccess] = useState('');
  const [tError, setTError] = useState('');
  const [tSuccess, setTSuccess] = useState('');
  const [sError, setSError] = useState('');
  const [sSuccess, setSSuccess] = useState('');

  const [cc, setCC] = useState(ccState);
  const [ct, setCT] = useState(ctState);
  const [cs, setCS] = useState(csState);

  // Create Speaker
  const perfomCS = (e) => {
    e.preventDefault();
    setSError('');
    for (let key in cs) {
      if (cs[key] === '') {
        setSError(`${key} can't be empty`);
        return;
      }
    }

    console.log(cs);
    createSpeaker(cs);
  };

  const onCsChange = (e) => {
    setCS({
      ...cs,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const createSpeaker = async (speaker) => {
    const response = await facade.createSpeaker(speaker);
    if (response.error === true) {
      setSSuccess('');
      setSError(response.message);
    }
    if (response.error === false) {
      setSError('');
      setSSuccess(response.message);
    }
    setCS(csState);
  };
  // Create Talk
  const perfomCT = (e) => {
    e.preventDefault();
    setTError('');
    for (let key in ct) {
      if (ct[key] === '') {
        setTError(`${key} can't be empty`);
        return;
      }
    }

    console.log(ct);
    createTalk(ct);
  };

  const onCTChange = (e) => {
    setCT({
      ...ct,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const createTalk = async (talk) => {
    const response = await facade.createTalk(talk);
    if (response.error === true) {
      setTSuccess('');
      setTError(response.message);
    }
    if (response.error === false) {
      setTError('');
      setTSuccess(response.message);
    }
    setCC(ccState);
  };

  // Create conference
  const perfomCC = (e) => {
    e.preventDefault();
    setCError('');
    for (let key in cc) {
      if (cc[key] === '') {
        setCError(`${key} can't be empty`);
        return;
      }
    }

    console.log(cc);
    createConference(cc);
  };

  const onCCChange = (e) => {
    setCC({
      ...cc,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const createConference = async (conf) => {
    const response = await facade.createConference(conf);
    if (response.error === true) {
      setCSuccess('');
      setCError(response.message);
    }
    if (response.error === false) {
      setCError('');
      setCSuccess(response.message);
    }
    setCC(ccState);
  };
  return (
    <AdminBody>
      <Wrapper>
        <VerticalWrapper>
          {/* CREATE CONFERENCE */}
          <CreateDiv>
            <h2>Create conference</h2>
            <CreateForm autoComplete="off">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Omega Conference"
                value={cc.name}
                onChange={onCCChange}
              />
              <label htmlFor="capacity">Capacity (1 - 50000)</label>
              <input
                type="number"
                name="capacity"
                id="capacity"
                value={cc.capacity}
                onChange={onCCChange}
              />
              <label htmlFor="location">Location</label>
              <input
                type="text"
                name="location"
                id="location"
                placeholder="New York"
                value={cc.location}
                onChange={onCCChange}
              />
              <label htmlFor="year">Year (ex: 2022)</label>
              <input
                type="number"
                name="year"
                id="year"
                placeholder="(1999)"
                value={cc.year}
                onChange={onCCChange}
              />
              <label htmlFor="month">Month (1 - 12)</label>
              <input
                type="number"
                name="month"
                id="month"
                placeholder="(1 - 12)"
                value={cc.month}
                onChange={onCCChange}
              />
              <label htmlFor="date">Day (1 - 31)</label>
              <input
                type="number"
                name="date"
                id="date"
                placeholder="(1 - 31)"
                value={cc.date}
                onChange={onCCChange}
              />
              <label htmlFor="time">Time</label>
              <input
                type="text"
                name="time"
                id="time"
                placeholder="(00:00 - 23:59)"
                value={cc.time}
                onChange={onCCChange}
              />
              {cError && <p className="red">{cError}</p>}
              {cSuccess && <p className="green">{cSuccess}</p>}

              <button onClick={perfomCC}>Create Conference</button>
            </CreateForm>
          </CreateDiv>
        </VerticalWrapper>
        <VerticalWrapper>
          {/* CREATE TALK */}
          <CreateDiv>
            <h2>Create Talk</h2>
            <CreateForm autoComplete="off">
              <label htmlFor="topic">Topic</label>
              <input
                type="text"
                name="topic"
                id="topic"
                placeholder="Animals"
                value={ct.topic}
                onChange={onCTChange}
              />
              <label htmlFor="duration">Duration in minutes (ex: "45")</label>
              <input
                type="number"
                name="duration"
                id="duration"
                value={ct.duration}
                onChange={onCTChange}
              />
              <label htmlFor="props_list">Prop List</label>
              <input
                type="text"
                name="props_list"
                id="props_list"
                placeholder="Microphone, Chair, Screen"
                value={ct.props_list}
                onChange={onCTChange}
              />
              {tError && <p className="red">{tError}</p>}
              {tSuccess && <p className="green">{tSuccess}</p>}
              <button onClick={perfomCT}>Create Talk</button>
            </CreateForm>
          </CreateDiv>
        </VerticalWrapper>
        <VerticalWrapper>
          {/* CREATE SPEAKER */}

          <CreateDiv>
            <h2>Create Speaker</h2>
            <CreateForm autoComplete="off">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="John Doe"
                value={cs.name}
                onChange={onCsChange}
              />
              <label htmlFor="Company">Company</label>
              <input
                type="text"
                name="company"
                id="company"
                value={cs.company}
                onChange={onCsChange}
                placeholder="Google"
              />
              <label htmlFor="profession">Profession</label>
              <input
                type="text"
                name="profession"
                id="profession"
                placeholder="Mechanic"
                value={cs.profession}
                onChange={onCsChange}
              />
              <label htmlFor="gender">Gender</label>
              <input
                type="text"
                name="gender"
                id="gender"
                placeholder="Male"
                value={cs.gender}
                onChange={onCsChange}
              />
              {sError && <p className="red">{sError}</p>}
              {sSuccess && <p className="green">{sSuccess}</p>}
              <button onClick={perfomCS}>Create Speaker</button>
            </CreateForm>
          </CreateDiv>
        </VerticalWrapper>
      </Wrapper>
    </AdminBody>
  );
};

export default AdminPanel;
