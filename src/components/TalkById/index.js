import { useEffect } from 'react';

// Styles
import { TalkByIdDiv, TalkByIdTable } from './TalkById.styles';

// Helpers
import { calcTime } from '../../Helpers';

// images
import unmutedIMG from '../../images/unmuted_pink.png';
// Components
import Spinner from '../Spinner';

const TalkById = ({
  loading,
  talkById,
  setLoading,
  selectedConf,
  fetchTalkBySpeaker,
  setSelectedSpeaker,
}) => {
  const selectSpeaker = (speaker) => {
    fetchTalkBySpeaker(speaker.id);
    setSelectedSpeaker(speaker);
  };
  return (
    <>
      <TalkByIdDiv>
        <div className="talkHeadline">
          <h2>Talks at {selectedConf.name}</h2>
          <img src={unmutedIMG} alt="microphone" />
        </div>
        {loading ? (
          <Spinner size="150px" />
        ) : (
          <TalkByIdTable>
            <thead>
              <tr>
                <th>Topic</th>
                <th>Duration</th>
                <th>Props list</th>
                <th>Speaker(s)</th>
              </tr>
            </thead>
            <tbody>
              {talkById.map((talk) => (
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
          </TalkByIdTable>
        )}
      </TalkByIdDiv>
    </>
  );
};

export default TalkById;
