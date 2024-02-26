import QRCode from "react-qr-code";

const Qr = ({ data }) => {
  const code = `>!>>FakeBank<!<<${data}>!>>FakeBank<!<<`;

  return <QRCode value={code} size={200} fgColor="#6200EE" />;
};

export default Qr;
