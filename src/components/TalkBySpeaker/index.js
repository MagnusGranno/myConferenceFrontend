// Styles
import {
  TalkBySpeakerDiv,
  TalkBySpeakerTable,
} from '../TalkBySpeaker/TalkBySpeaker.styles';

// images
import speakerIMG from '../../images/speaker_pink.png';
// Components
import Spinner from '../Spinner';
import { calcTime } from '../../Helpers';
const TalkBySpeaker = ({ loading, talksBySpeaker, selectedSpeaker }) => {
  return (
    <>
      <TalkBySpeakerDiv>
        <div className="TalkBySpeakerHeadline">
          <h2>Talks by {selectedSpeaker.name}</h2>
          <img src={speakerIMG} alt="conferenceimg" />
        </div>
        <TalkBySpeakerTable>
          <thead>
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
              {talksBySpeaker.map((talk) => (
                <tr key={+talk.id}>
                  <td>{talk.topic}</td>
                  <td>{calcTime(talk.duration)}</td>
                  <td>{talk.props_list}</td>
                </tr>
              ))}
            </tbody>
          )}
        </TalkBySpeakerTable>
      </TalkBySpeakerDiv>
    </>
  );
};

export default TalkBySpeaker;
