// Styles
import { AdminConfDIv, AdminConfTable } from './Talks.styles';

// Components
import Spinner from '../Spinner';

// images
import capacityIMG from '../../images/capacitySmall.png';

// Helpers
import { formatDate } from '../../Helpers';
const AdminConf = ({ loading, conferences }) => {
  return (
    <>
      <AdminConfDIv>
        <div className="adminConfHeadline">
          <h2>Conferences</h2>
        </div>
        {loading ? (
          <Spinner size="150px" />
        ) : (
          <AdminConfTable>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Location</th>
                <th>Capacity</th>
                <th>Date</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {conferences.map((conference) => (
                <tr key={+conference.id}>
                  <td>{conference.id}</td>
                  <td>{conference.name}</td>
                  <td>{conference.location}</td>
                  <td>
                    {conference.capacity}
                    <img src={capacityIMG} alt="capacity" />
                  </td>
                  <td>{formatDate(conference.date)}</td>
                  <td>{conference.time}</td>
                </tr>
              ))}
            </tbody>
          </AdminConfTable>
        )}
      </AdminConfDIv>
    </>
  );
};

export default AdminConf;
