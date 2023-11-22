import { Box, Container, Grid, Typography } from "@mui/material";
import Img from "src/assets/images/survey.jpg";
import { makeStyles } from "src/utils/makeStyles";
import { Fonts } from "src/utils";

const useStyles = makeStyles()((theme) => ({
  span: {
    color: theme.palette.secondary.main,
  },
}));

const SurveyReport = () => {
  const { classes } = useStyles();
  return (
    <Box>
      <Container maxWidth="xl" sx={{ pt: 10 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={6}>
            <Box className="center" sx={{ height: "100%" }}>
              <img src={Img} alt="survey" width="100%" />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Typography variant="h4" fontFamily={Fonts.Monteserrat} fontWeight={700}>
              About Marbles Industry
            </Typography>
            <Typography variant="body1" fontWeight={600} color="primary" sx={{ mt: "-5px" }}>
              Pakistan StoneNews
            </Typography>
            <Typography variant="body1" fontWeight={600}>
              Researcher & Writer: <span className={classes.span}>Badar Iqbal</span>
              <br />
              +92-313-9292654 / +92-300-2292654
            </Typography>
            <Typography sx={{ mt: 3 }}>
              Pakistan has 87 minerals in the world. The economy of most countries of the world depends on these
              minerals. Such as petrolium. But Pakistan has the second largest reserves of coal and the third largest
              reserves of copper in the world along with the fourth largest reserves of marble and granite.
              <br />
              Unfortunately, till date no industries or mines were worked in marble and granite sector before the
              formation of Pakistan and till 1960s. In Karachi, Sims Stone was used only as a block during the British
              period in construction. Even Habib Bank Plaza could not use Pakistani marble in its construction. <br />
              Mazar Quaid got the first marble project in Pakistan. In which the use of Italian marble process machinery
              started from the premises of Mazar-e-Quaid. And the first marble came from Malagor in Khyber Agency of
              Khyber Pakhtunkhwa. Stone like Malagore was also called Mur. Pakistan was the first marble of production
              and construction. After the construction of Mazar-e-Quaid,
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              This missionary action. As installed in the site area, copies were made in Pak Colony and installed in Pak
              Colony. And then the Onyx Zhari family and Terveera from Balochistan. Rabbit. Champagne was introduced by
              Shahji and Arif Khanzada. Virona Maulvi Mushtaq was introduced to Woods. Later, mines sector industries
              and markets were introduced in various marble gray knight sectors in different areas all over Pakistan.
              The first association formed on tax reform. Al Pakistan Marble Industries Association. Which was shifted
              to Islamabad on the need of reforms. And its first chairman was Farid Sahib. A vacuum was felt in Karachi.
              Al-Karachi Marble Industries Association was established to meet the shortage. Which is registered from
              Sindh province. And to become its first chairman Badraqbal. Those who have made the role of the
              association government institutions. Policies and measures were taken to bring business reforms in markets
              and improve industries. They are still in this position. The government should implement the practical
              measures it announced in 2010 for the improvement of Marple Industries. Marble City, a project built on
              the Marble Sector at Meithani Village, has its office at FTC Building, Shaara Faisal, next to Gora
              Cemetery. The marble traders should hand it over to Sindh. And secondly, 350 acres of land of the Mehtani
              Main Local Government Plan of the marble sector should also be handed over to Market Pak Colony. As
              mentioned in reference to Juna Market. There is a mountain range along the Hub River starting from the
              Northern Bypass Road. Which is a perfect place for solar and winds. Which will provide stability to the
              marble industries with cheap electricity from the private sector. . KE and self-styled brokers in their
              name will be killed. The project will continue to expand with substantial reduction in electricity bills.
              . With respect to marble industries, marble sector will bring growth in marble industries by removing it
              from foot scale and bringing it to decimal scale i.e. meter. Co-filling marbles will be used with
              polishing materials to eliminate collieties and B collieties. And the rates will be stable. Instead of
              builders grease tiles, Valuation will move to marble meters systems. Under International Rose, current
              marble treasures will be held abroad. Which will renew the country. The country will be stable.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SurveyReport;
