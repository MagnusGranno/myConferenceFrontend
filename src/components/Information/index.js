import { useState, useEffect } from 'react';

// styles
import { Wrapper, OwnerDiv, InfoBody, OwnersTable } from './Information.styles';

// Router
import { useNavigate } from 'react-router-dom';

// components
import Spinner from '../Spinner';

// facade
import { facade } from '../../apiFacade';

// image
import ownersIMG from '../../images/owners.png';

const Information = ({ loggedIn }) => {
  const navigate = useNavigate();
  const [conferences, setConferences] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const fetchConferences = async () => {
    const response = await facade.fetchConferences();
    setConferences(response);
    return response;
  };

  return (
    <InfoBody>
      <Wrapper>
        <OwnerDiv>
          <div className="ownerHeadline">
            <h2>Conferences</h2> <img src={ownersIMG} alt="ownerimg" />
          </div>
          <OwnersTable>
            <thead>
              <tr>
                <th>Name</th>
                <th>Location</th>
                <th>Capacity</th>
                <th>Date</th>
                <th>Time</th>
              </tr>
            </thead>
            {loading ? (
              <Spinner size={'150px'} />
            ) : (
              <tbody>
                {conferences.map((conference) => (
                  <tr key={+conference.id}>
                    <td>{conference.name}</td>
                    <td>{conference.location}</td>
                    <td>{conference.capacity}</td>
                    <td>{conference.date}</td>
                    <td>{conference.time}</td>
                  </tr>
                ))}
              </tbody>
            )}
          </OwnersTable>
        </OwnerDiv>
        <OwnerDiv>
          {loading ? <Spinner size={'150px'} /> : <p>TESTING TESTING</p>}
        </OwnerDiv>
        <OwnerDiv>
          {loading ? <Spinner size={'150px'} /> : <p>TESTING TESTING</p>}
        </OwnerDiv>
      </Wrapper>
    </InfoBody>
  );
};

export default Information;
