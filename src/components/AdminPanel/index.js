import { useState } from 'react';

// Facade
import { facade } from '../../apiFacade';

// Styles
import {
  AdminBody,
  Wrapper,
  VerticalWrapper,
  CreateConferenceDiv,
  CreateConferenceForm,
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
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const [cc, setCC] = useState(ccState);

  const perfomCC = (e) => {
    e.preventDefault();
    setError('');
    for (let key in cc) {
      if (cc[key] === '') {
        setError(`${key} can't be empty`);
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
      setSuccess('');
      setError(response.message);
    }
    if (response.error === false) {
      setError('');
      setSuccess(response.message);
    }
    setCC(ccState);
  };
  return (
    <AdminBody>
      <Wrapper>
        <VerticalWrapper>
          <CreateConferenceDiv>
            <h2>Create conference</h2>
            <CreateConferenceForm autoComplete="off">
              <label for="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Omega Conference"
                value={cc.name}
                onChange={onCCChange}
              />
              <label for="capacity">Capacity (1 - 50000)</label>
              <input
                type="number"
                name="capacity"
                id="capacity"
                value={cc.capacity}
                onChange={onCCChange}
              />
              <label for="location">Location</label>
              <input
                type="text"
                name="location"
                id="location"
                placeholder="New York"
                value={cc.location}
                onChange={onCCChange}
              />
              <label for="year">Year (ex: 2022)</label>
              <input
                type="number"
                name="year"
                id="year"
                placeholder="(1999)"
                value={cc.year}
                onChange={onCCChange}
              />
              <label for="month">Month (1 - 12)</label>
              <input
                type="number"
                name="month"
                id="month"
                placeholder="(1 - 12)"
                value={cc.month}
                onChange={onCCChange}
              />
              <label for="date">Day (1 - 31)</label>
              <input
                type="number"
                name="date"
                id="date"
                placeholder="(1 - 31)"
                value={cc.date}
                onChange={onCCChange}
              />
              <label for="time">Time</label>
              <input
                type="text"
                name="time"
                id="time"
                placeholder="(00:00 - 23:59)"
                value={cc.time}
                onChange={onCCChange}
              />
              {error && <p>{error}</p>}
              {success && <p>{success}</p>}

              <button onClick={perfomCC}>Create</button>
            </CreateConferenceForm>
          </CreateConferenceDiv>
        </VerticalWrapper>
        <VerticalWrapper></VerticalWrapper>
      </Wrapper>
    </AdminBody>
  );
};

export default AdminPanel;
