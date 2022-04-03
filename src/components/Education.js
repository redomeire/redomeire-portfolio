import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import "../components/style/GLobal.css";
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from './Theme';

const steps = [
    {
      label: '2015 - 2018 (SMP Taruna Nusa Harapan)',
      description: `This is one of the private schools in Mojokerto, East Java. I have attended journalism extracurricular there`,
    },
    {
      label: '2018 - 2021 (SMAN 1 Sooko)',
      description:
        'One of the favorite public high schools in Mojokerto. Here, I majored in mathematics and natural science',
    },
    {
      label: '2021 - present (University of Brawijaya)',
      description: `
      This university is located in Malang, East Java. I majored in information technology, faculty of computer science. Now, I'm taking my second semester there`,
    },
  ];

function Education(){
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return(
      <ThemeProvider theme={darkTheme}>
          <Box>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel
                  optional={
                    index === 2 ? (
                      <Typography></Typography>
                    ) : null
                  }
                >
                  <Typography className="color-white">
                    {step.label}
                  </Typography>
                </StepLabel>
                <StepContent>
                  <Typography className="color-secondary-dark">{step.description}</Typography>
                  <Box sx={{ mb: 2 }}>
                    <div>
                      <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 4, mr: 1 }}
                      >
                        {index === steps.length - 1 ? 'Finish' : 'Continue'}
                      </Button>
                      <Button
                        disabled={index === 0}
                        onClick={handleBack}
                        sx={{ mt: 4, mr: 1 }}
                      >
                        Back
                      </Button>
                    </div>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper square elevation={0} sx={{ p: 3 }}>
              <Typography>All steps completed - you&apos;re finished</Typography>
              <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                Reset
              </Button>
            </Paper>
          )}
        </Box>
      </ThemeProvider>
    );
}

export default Education;