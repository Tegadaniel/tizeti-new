import { CopyToClipboard } from 'react-copy-to-clipboard';
import copy from '../assets/images/copy.svg'

const CustomCopyToClipboard = (onCopy, text) => (
  <CopyToClipboard onCopy={onCopy} text={text}>
    <img src={copy} alt="copy" className="cursor-pointer" />
  </CopyToClipboard>
);

export default CustomCopyToClipboard;
