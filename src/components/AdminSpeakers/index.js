// Styles
import { AdminSpeakerDiv, AdminSpeakerTable } from './Talks.styles';

// Components
import Spinner from '../Spinner';

const AdminSpeakers = ({ loading, speakers }) => {
  return (
    <>
      <AdminSpeakerDiv>
        <div className="adminSpeakersHeadline">
          <h2>Speakers</h2>
        </div>
        {loading ? (
          <Spinner size="150px" />
        ) : (
          <AdminSpeakerTable>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Company</th>
                <th>Profession</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
              {speakers.map((speaker) => (
                <tr key={+speaker.id}>
                  <td>{speaker.id}</td>
                  <td>{speaker.name}</td>
                  <td>{speaker.company}</td>
                  <td>{speaker.profession}</td>
                  <td>{speaker.gender}</td>
                </tr>
              ))}
            </tbody>
          </AdminSpeakerTable>
        )}
      </AdminSpeakerDiv>
    </>
  );
};

export default AdminSpeakers;
