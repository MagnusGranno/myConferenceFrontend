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
const TalkBySpeaker = ({
  loading,
  talksBySpeaker,
  selectedSpeaker,
  fetchTalkBySpeaker,
  setSelectedSpeaker,
}) => {
  const selectSpeaker = (speaker) => {
    fetchTalkBySpeaker(speaker.id);
    setSelectedSpeaker(speaker);
  };
  return (
    <>
      <TalkBySpeakerDiv>
        <div className="TalkBySpeakerHeadline">
          <h2>Talks by {selectedSpeaker.name}</h2>
          <img src={speakerIMG} alt="conferenceimg" />
        </div>
        {loading ? (
          <Spinner size="150px" />
        ) : (
          <TalkBySpeakerTable>
            <thead>
              <tr>
                <th>Topic</th>
                <th>Duration</th>
                <th>Props list</th>
                <th>Speaker(s)</th>
              </tr>
            </thead>
            <tbody>
              {talksBySpeaker.map((talk) => (
                <tr key={+talk.id}>
                  <td>{talk.topic}</td>
                  <td>{calcTime(talk.duration)}</td>
                  <td>{talk.props_list}</td>
                  <td>
                    {talk.speaker_list.map((speaker) => (
                      <p
                        key={speaker.id}
                        onClick={() => selectSpeaker(speaker)}
                      >
                        {speaker.name}
                      </p>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </TalkBySpeakerTable>
        )}
      </TalkBySpeakerDiv>
    </>
  );
};

export default TalkBySpeaker;
