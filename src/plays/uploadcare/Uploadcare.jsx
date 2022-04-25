import { getPlayById } from "meta/play-meta-util";

import PlayHeader from "common/playlists/PlayHeader";

import { Widget } from "@uploadcare/react-widget";
import ListFiles from './ListFiles';
import './uploadcare.css';

function Uploadcare(props) {
  // Do not remove the below lines.
  // The following code is to fetch the current play from the URL
  const { id } = props;
  const play = getPlayById(id);

  // Your Code Start below.

  const uploadFileChange = info => {
    console.log(info);
  }

  const uplodFileSelect = file => {
    console.log(`file changed ${file}`);

    if (file) {
      file.progress(info => console.log('File progress: ', info.progress))
      file.done(info => console.log('File uploaded: ', info))
    }
  }

  return (
    <>
      <div className="play-details">
        <PlayHeader play={play} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <div className="ucare-widget">
            <div>
              <label htmlFor="file">Please upload an image</label>{" "}
              <Widget 
                publicKey={process.env.REACT_APP_UPLOADCARE_API_PUBLIC_KEY} 
                id="file"
                Clearable={true}
                onChange = {(info) => uploadFileChange(info)}
                onFileSelect = {(file) => uplodFileSelect(file)} />
            </div>
          </div>
          <ListFiles />

          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default Uploadcare;
