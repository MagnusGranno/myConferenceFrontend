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
  const [owners, setOwners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllOwners();
  }, []);

  useEffect(() => {
    if (owners.length < 1) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [owners]);

  useEffect(() => {
    if (!loggedIn) {
      navigate('/');
    }
  }, [loggedIn]);

  const fetchAllOwners = async () => {
    const response = await facade.fetchOwners();
    setOwners(response);
    return response;
  };

  return (
    <InfoBody>
      <Wrapper>
        <OwnerDiv>
          <div className="ownerHeadline">
            <h2>Owners</h2> <img src={ownersIMG} alt="ownerimg" />
          </div>
          <OwnersTable>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Address</th>
                <th>Phone</th>
              </tr>
            </thead>
            {loading ? (
              <Spinner size={'150px'} />
            ) : (
              <tbody>
                {owners.map((owner) => (
                  <tr key={+owner.id}>
                    <td>{owner.id}</td>
                    <td>{owner.name}</td>
                    <td>{owner.address}</td>
                    <td>{owner.phone}</td>
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
