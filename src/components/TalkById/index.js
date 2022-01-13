import { useEffect } from 'react';

// Styles
import { TalkByIdDiv, TalkByIdTable } from './TalkById.styles';

// Helpers
import { calcTime, formatDate } from '../../Helpers';

// Components
import Spinner from '../Spinner';

const TalkById = ({ loading, talkById, setLoading, selectedConf }) => {
  useEffect(() => {
    if (talkById.length < 1) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [talkById]);
  return (
    <>
      <TalkByIdDiv>
        <TalkByIdTable>
          <thead>
            <tr>
              <th className="centerMe" colSpan="4">
                {selectedConf.name}
              </th>
            </tr>
            <tr>
              <th>Location</th>
              <th>Capacity</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{selectedConf.location}</td>
              <td>{selectedConf.capacity}</td>
              <td>{formatDate(selectedConf.date)}</td>
              <td>{selectedConf.time}</td>
            </tr>
          </tbody>
        </TalkByIdTable>
        <TalkByIdTable>
          <thead>
            <tr>
              <th className="centerMe" colSpan="4">
                Talks
              </th>
            </tr>
            <tr>
              <th>Topic</th>
              <th>Duration</th>
              <th>Props list</th>
            </tr>
          </thead>
          {loading ? (
            <Spinner size={'150px'} />
          ) : (
            <tbody>
              {talkById.map((talk) => (
                <tr key={+talk.id}>
                  <td>{talk.topic}</td>
                  <td>{calcTime(talk.duration)}</td>
                  <td>{talk.props_list}</td>
                </tr>
              ))}
            </tbody>
          )}
        </TalkByIdTable>
      </TalkByIdDiv>
    </>
  );
};

export default TalkById;
