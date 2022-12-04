import React, { useState, useEffect } from "react";
import {
  Container,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";
import { useHistory } from "react-router";

const Quotes = () => {
  let history = useHistory();
  const [quotes, setQuotes] = useState(null);
  const [ages, setAges] = useState([]);

  let getAuthorAge = async (name) => {
    let response = await fetch(
      `https://api.agify.io/?name=${name.split(" ")[0]}`
    );
    let data = await response.json();
    return data.age;
  };

  useEffect(() => {
    const fetchQuotes = async () => {
      let response = await fetch("https://api.quotable.io/quotes");
      let data = await response.json();
      setQuotes(data.results);
    };
    fetchQuotes();
  }, []);

  useEffect(() => {
    if (quotes) {
      quotes.forEach(async (item, i) => {
        let age = await getAuthorAge(item.author);
        if (age) {
          setAges((ages) => [...ages, age]);
        }
      });
    }
  }, [quotes]);

  return (
    <Container>
      <Button
        variant="contained"
        fullWidth
        onClick={() => history.push("/random-quote")}
        sx={{ mt: 3 }}
      >
        Get random quote
      </Button>
      {quotes && (
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Quote</TableCell>
              <TableCell>Author</TableCell>
              <TableCell>Age Emoji</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {quotes.map((item, i) => (
              <React.Fragment key={i}>
                <TableRow>
                  <TableCell>{item._id}</TableCell>
                  <TableCell>{item.content}</TableCell>
                  <TableCell>{item.author}</TableCell>
                  <TableCell>
                    {ages[i]} {ages[i] < 50 ? "👶" : "🧓"}
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      )}
    </Container>
  );
};

export default Quotes;
