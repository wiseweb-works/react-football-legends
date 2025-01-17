import { Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { data } from '../../helpers/data';
import { useState } from 'react';
import LegendCard from './LegendCard';

const LegendContainer = () => {
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.trim().toLowerCase())
  );

  return (
    <div>
      <Form.Control
        className="w-50 mx-auto my-2"
        type="search"
        placeholder="Search Legends.."
        onChange={handleChange}
      />

      <Container className="p-3 my-3 card-container">
        <Row xs={1} md={2} xl={3} className="justify-content-center g-3">
          {filteredData.map((legend) => (
            <LegendCard key={legend.id} legend={legend} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default LegendContainer;
