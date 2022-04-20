import { Divider, Col, Row,Button } from "antd";
const DescriptionItem = ({ title, content }) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label">{title}:</p>
    {content}
  </div>
);
export default function CustomerDescription() {
  return (
    <>
      <p
        className="site-description-item-profile-p"
        style={{ marginBottom: 24 }}
      >
        User Profile
      </p>
      <p className="site-description-item-profile-p">Personal</p>
      <Row>
        <Col span={12}>
          <DescriptionItem title="Full Name" content="Lily" />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Account" content="AntDesign@example.com" />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <DescriptionItem title="City" content="HangZhou" />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Country" content="China🇨🇳" />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <DescriptionItem title="Birthday" content="February 2,1900" />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Website" content="-" />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <DescriptionItem
            title="Message"
            content="Make things as simple as possible but no simpler."
          />
        </Col>
      </Row>
      <Divider />
      <p className="site-description-item-profile-p">Company</p>
      <Row>
        <Col span={12}>
          <DescriptionItem title="Position" content="Programmer" />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Responsibilities" content="Coding" />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <DescriptionItem title="Department" content="XTech" />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Supervisor" content={<a>Lin</a>} />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <DescriptionItem
            title="Skills"
            content="C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc."
          />
        </Col>
      </Row>
      <Divider />
      
      <Row>
        <Col span={24}>
        <Button type="primary" shape="round" size={"large"} style={{marginRight:"20px"}}>
          Xác nhận
        </Button>
        <Button type="danger" shape="round" size={"large"}>
          Không xác nhận
        </Button>
        </Col>
      </Row>
    </>
  );
}
