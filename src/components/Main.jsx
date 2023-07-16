import { Container, Col, Row } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import CardContent from "./Card";

export default function Main() {
  const isSmallScreen = useMediaQuery({ maxWidth: 575 });
  const isMediumScreen = useMediaQuery({ minWidth: 576, maxWidth: 991 });

  const getColCount = () => {
    if (isSmallScreen) {
      return 1;
    } else if (isMediumScreen) {
      return 2;
    } else {
      return 3;
    }
  };

  const rowCount = 3;
  const colCount = getColCount();

  const generateCols = () => {
    const cols = [];
    for (let i = 0; i < colCount; i++) {
      cols.push(
        <Col key={i} className="my-3">
          <CardContent />
        </Col>
      );
    }
    return cols;
  };

  const generateRows = () => {
    const rows = [];
    for (let i = 0; i < rowCount; i++) {
      rows.push(<Row key={i}>{generateCols()}</Row>);
    }
    return rows;
  };

  return (
    <Container fluid className="p-5 bg-light">
      {generateRows()}
    </Container>
  );
}
