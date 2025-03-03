import React, { useContext } from 'react';
import {
  Box,
  Typography,
  Paper,
  Grid,
  TextField,
  Button,
  Stack,
  InputAdornment,
  Divider,
  Avatar,
  Container
} from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { CustomThemeContext } from '../config/CustomThemeProvider.jsx';


const StakingPage = () => {
  const { currentTheme } = useContext(CustomThemeContext);
  const darkMode = currentTheme === 'dark';

  // Sample data for dashboard
  const metrics = [
    { label: "Total Staked", value: "1,245,632 ELO" },
    { label: "Your Stake", value: "5,000 ELO" },
    { label: "APY", value: "12.4%", highlight: true },
    { label: "Rewards", value: "126.8 ELO" },
    { label: "Next Reward", value: "2 days" }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Introduction */}
      <Box sx={{ mb: 5, textAlign: 'center' }}>
        <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
          Stake $ELO to earn rewards
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
          Stake your $ELO tokens in our pools to earn high APR returns. Please be aware that
          <Typography component="span" fontWeight="bold"> estimated APRs will likely drop over time as more people join the pool</Typography>.
          First you must approve your $ELO for use on the staking contract, then enter an amount and press stake.
        </Typography>
      </Box>

      {/* Staking Steps */}
      <Paper
        elevation={0}
        sx={{
          mb: 4,
          p: 3,
          borderRadius: 3,
          bgcolor: 'background.paper',
          border: 1,
          borderColor: 'divider'
        }}
      >
        <Typography variant="h6" fontWeight="bold" mb={3}>
          How to Stake
        </Typography>
        <Grid container spacing={3}>
          {[
            {
              step: 1,
              title: "Approve $ELO",
              description: "Approve the staking contract to use your $ELO tokens"
            },
            {
              step: 2,
              title: "Enter amount",
              description: "Choose how many $ELO tokens you want to stake"
            },
            {
              step: 3,
              title: "Stake tokens",
              description: "Confirm the transaction and start earning rewards"
            }
          ].map(item => (
            <Grid item xs={12} md={4} key={item.step}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                <Avatar
                  sx={{
                    bgcolor: 'primary.main',
                    width: 32,
                    height: 32,
                    mr: 1.5,
                    fontSize: 14,
                    fontWeight: 'bold'
                  }}
                >
                  {item.step}
                </Avatar>
                <Box>
                  <Typography fontWeight="600" color="primary.main" mb={0.5}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* Dashboard Metrics */}
      <Paper
        elevation={0}
        sx={{
          mb: 4,
          p: 3,
          borderRadius: 3,
          bgcolor: 'background.paper',
          border: 1,
          borderColor: 'divider'
        }}
      >
        <Typography variant="h6" fontWeight="bold" mb={3}>
          Staking Dashboard
        </Typography>
        <Grid container spacing={2}>
          {metrics.map((metric, index) => (
            <Grid item xs={6} sm={4} md={2.4} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 2,
                  textAlign: 'center',
                  bgcolor: darkMode ? 'grey.900' : 'grey.100',
                  borderRadius: 2
                }}
              >
                <Typography variant="body2" color="text.secondary" mb={1}>
                  {metric.label}
                </Typography>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  color={metric.highlight ? 'primary.main' : 'text.primary'}
                >
                  {metric.value}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* Staking Form */}
      <Paper
        elevation={0}
        sx={{
          mb: 4,
          p: 3,
          borderRadius: 3,
          bgcolor: 'background.paper',
          border: 1,
          borderColor: 'divider'
        }}
      >
        <Typography variant="h6" fontWeight="bold" mb={3}>
          Stake Your $ELO
        </Typography>
        <Box mb={3}>
          <Typography variant="body2" color="text.secondary" mb={1}>
            Amount to Stake
          </Typography>
          <TextField
            fullWidth
            placeholder="0.0"
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root': {
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                bgcolor: darkMode ? 'grey.900' : 'grey.50',
              }
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    sx={{
                      borderTopLeftRadius: 0,
                      borderBottomLeftRadius: 0,
                      bgcolor: darkMode ? 'grey.800' : 'grey.200',
                      color: 'text.primary',
                      px: 2
                    }}
                  >
                    MAX
                  </Button>
                </InputAdornment>
              )
            }}
          />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              mt: 1
            }}
          >
            <Typography variant="caption" color="text.secondary">
              Balance: 25,000 ELO
            </Typography>
            <Typography variant="caption" color="text.secondary">
              ≈ $1,250 USD
            </Typography>
          </Box>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Button
              fullWidth
              variant="outlined"
              sx={{
                py: 1.5,
                borderRadius: 6,
                bgcolor: darkMode ? 'grey.900' : 'grey.100',
                color: 'text.primary',
                borderColor: 'divider',
                '&:hover': {
                  bgcolor: darkMode ? 'grey.800' : 'grey.200',
                }
              }}
            >
              Approve ELO
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{
                py: 1.5,
                borderRadius: 6
              }}
            >
              Stake Now
            </Button>
          </Grid>
        </Grid>
      </Paper>

      {/* Rewards Section */}
      <Paper
        elevation={0}
        sx={{
          mb: 4,
          p: 3,
          borderRadius: 3,
          bgcolor: 'background.paper',
          border: 1,
          borderColor: 'divider'
        }}
      >
        <Typography variant="h6" fontWeight="bold" mb={3}>
          Your Rewards
        </Typography>
        <Paper
          elevation={0}
          sx={{
            p: 2.5,
            mb: 3,
            borderRadius: 2,
            bgcolor: darkMode ? 'grey.900' : 'grey.100',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <Box>
              <Typography fontWeight="bold" mb={0.5}>
                Unclaimed Rewards
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Available to harvest
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'right' }}>
              <Typography fontWeight="bold" color="primary.main" mb={0.5}>
                126.8 ELO
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ≈ $6.34 USD
              </Typography>
            </Box>
          </Box>
        </Paper>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          sx={{
            py: 1.5,
            borderRadius: 6
          }}
        >
          Harvest Rewards
        </Button>
      </Paper>

      {/* Additional Info */}
      <Paper
        elevation={0}
        sx={{
          p: 3,
          borderRadius: 3,
          bgcolor: 'background.paper',
          border: 1,
          borderColor: 'divider'
        }}
      >
        <Typography variant="h6" fontWeight="bold" mb={3}>
          Staking Information
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <InfoOutlinedIcon color="primary" sx={{ mr: 1.5 }} />
          <Typography variant="body2">
            Staking rewards are distributed automatically every 24 hours
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <InfoOutlinedIcon color="primary" sx={{ mr: 1.5 }} />
          <Typography variant="body2">
            There is a 3-day unstaking period for all staked tokens
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <InfoOutlinedIcon color="primary" sx={{ mr: 1.5 }} />
          <Typography variant="body2">
            APY is variable and depends on the total amount staked in the pool
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default StakingPage;
