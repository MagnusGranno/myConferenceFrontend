// Styles
import { TalksDiv, TalksTable } from './Talks.styles';

// Components
import Spinner from '../Spinner';

// Helpers
import { calcTime } from '../../Helpers';
const Talks = ({ loading, talks }) => {
  return (
    <>
      <TalksDiv>
        <div className="talksHeadline">
          <h2>Talks</h2>
        </div>
        {loading ? (
          <Spinner size="150px" />
        ) : (
          <TalksTable>
            <thead>
              <tr>
                <th>ID</th>
                <th>Topic</th>
                <th>Duration</th>
                <th>Props list</th>
                <th>Speaker(s)</th>
              </tr>
            </thead>
            <tbody>
              {talks.map((talk) => (
                <tr key={+talk.id}>
                  <td>{talk.id}</td>
                  <td>{talk.topic}</td>
                  <td>{calcTime(talk.duration)}</td>
                  <td>{talk.props_list}</td>
                  <td>
                    {talk.speaker_list.map((speaker) => (
                      <p key={speaker.id}>{speaker.name}</p>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </TalksTable>
        )}
      </TalksDiv>
    </>
  );
};

export default Talks;
