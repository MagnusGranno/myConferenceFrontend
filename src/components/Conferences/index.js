// Styles
import { ConferenceDiv, ConferenceTable } from './Conferences.styles';

// Image
import conferencesIMG from '../../images/globe_pink.png';
import capacityIMG from '../../images/capacitySmall.png';
// Helpers
import { formatDate } from '../../Helpers';

// Components
import Spinner from '../Spinner';

const Conferences = ({
  loading,
  conferences,
  fetchTalkById,
  setSelectedConf,
}) => {
  const selectConference = (conf) => {
    fetchTalkById(conf.id);
    setSelectedConf(conf);
  };
  return (
    <>
      <ConferenceDiv>
        <div className="conferenceHeadline">
          <h2>Conferences</h2> <img src={conferencesIMG} alt="conferenceimg" />
        </div>
        {loading ? (
          <Spinner size={'150px'} />
        ) : (
          <ConferenceTable>
            <thead>
              <tr>
                <th>Name</th>
                <th>Location</th>
                <th>Capacity</th>
                <th>Date</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {conferences.map((conference) => (
                <tr
                  key={+conference.id}
                  onClick={() => selectConference(conference)}
                >
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
          </ConferenceTable>
        )}
      </ConferenceDiv>
    </>
  );
};

export default Conferences;
