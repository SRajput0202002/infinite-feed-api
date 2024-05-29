import React, { useState } from "react";
import { Card, Button, Container, Col, Row } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroller";

export default function CardComponent({ cardData }) {
  const [data, setData] = useState(cardData.slice(0, 10));
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const loadMore = async (page) => {
    setLoading(true);

    const newDataChunk = cardData.slice(data.length, data.length + 10);

    if (newDataChunk.length === 0) {
      setHasMore(false);
      setLoading(false);
      return;
    }

    setData((prevData) => [...prevData, ...newDataChunk]);
    setLoading(false);
  };

  return (
    <Container>
      <InfiniteScroll
        pageStart={0}
        loadMore={loadMore}
        hasMore={hasMore}
        loader={
          <div className="loader" key={0}>
            {loading ? "Loading items..." : "No more data"}
          </div>
        }
      >
        <Row>
          {data.map((card, index) => (
            <Col md={4} key={index}>
              <Card style={{ width: "20remrem", margin: "2px" }}>
                <Card.Img
                  variant="top"
                  src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
                />
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>{card.description}</Card.Text>
                  <Button variant="primary">{card.buttonName}</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </InfiniteScroll>
    </Container>
  );
}
