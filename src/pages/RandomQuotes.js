import { useState, useEffect } from "react";
import { Container, Grid, CircularProgress, Button } from "@mui/material";
import { useHistory } from "react-router";

const RandomQuote = () => {
  let history = useHistory();
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchRandomQuote = async () => {
    setLoading(true);
    let response = await fetch("https://api.quotable.io/random");
    let data = await response.json();
    if (data) {
      setQuote(data);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  return (
    <Container>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        {!loading && quote ? (
          <Grid item>
            <h4>{quote.content}</h4>
            <p>-{quote.author}</p>
          </Grid>
        ) : (
          <Grid item>
            <CircularProgress />
          </Grid>
        )}
        <Grid container align="center" direction="row">
          <Grid item xs={6}>
            <Button variant="contained" onClick={() => history.push("/quotes")}>
              Quotes
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" onClick={() => fetchRandomQuote()}>
              Random Quote
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RandomQuote;
