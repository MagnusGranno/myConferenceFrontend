// Styles
import { SpeakerDiv, SpeakerTable } from './Speakers.styles';

// Components
import Spinner from '../Spinner';

// Images
import speakersIMG from '../../images/speakers_pink.png';
const Speakers = ({
  loading,
  speakers,
  setSelectedSpeaker,
  fetchTalkBySpeaker,
}) => {
  const selectSpeaker = (speaker) => {
    fetchTalkBySpeaker(speaker.id);
    setSelectedSpeaker(speaker);
  };
  return (
    <>
      <SpeakerDiv>
        <div className="speakerHeadline">
          <h2>Speakers</h2> <img src={speakersIMG} alt="speakers" />
        </div>
        <SpeakerTable>
          <thead>
            <tr>
              <th>Name</th>
              <th>Company</th>
              <th>Profession</th>
              <th>Gender</th>
            </tr>
          </thead>
          {loading ? (
            <Spinner size={'150px'} />
          ) : (
            <tbody>
              {speakers.map((speaker) => (
                <tr key={+speaker.id} onClick={() => selectSpeaker(speaker)}>
                  <td>{speaker.name}</td>
                  <td>
                    {speaker.company.length < 1 ? 'N/A' : speaker.company}
                  </td>
                  <td>{speaker.profession}</td>
                  <td>{speaker.gender}</td>
                </tr>
              ))}
            </tbody>
          )}
        </SpeakerTable>
      </SpeakerDiv>
    </>
  );
};

export default Speakers;
