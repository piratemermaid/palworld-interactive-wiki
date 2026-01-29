import React from 'react';
import { Button, Grid, TextareaAutosize, Typography } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import type { SvgIconComponent } from '@mui/icons-material';

import { useStore } from '@store';

export const MyDataPage = () => {
  const [data, setData] = React.useState('');

  const store = useStore((store) => store);
  const setUserPals = useStore((store) => store.setUserPals);
  const setUserPalsCaughtTen = useStore((store) => store.setUserPalsCaughtTen);

  const handleImportData = () => {
    const importData = JSON.parse(data);

    setUserPals(importData.userPals);
    setUserPalsCaughtTen(importData.userPalsCaughtTen);
  };

  const copyExportData = () => {
    navigator.clipboard.writeText(JSON.stringify(dataToDisplay));
    alert('Copied your data');
  };

  const dataToDisplay = {
    userPals: store.userPals,
    userPalsCaughtTen: store.userPalsCaughtTen,
  };

  return (
    <>
      <Typography variant="h2" sx={{ my: 2 }}>
        My Data
      </Typography>
      <Typography variant="body1" sx={{ mx: 20, mb: 2 }}>
        Since this app only runs off local storage, you can move your data to
        another device by copying it and then pasting and importing on the
        device you want to use.
      </Typography>

      <Grid container>
        <ImportExportSection
          title="Export"
          value={JSON.stringify(dataToDisplay)}
          isReadOnly={true}
          buttonText="Copy Data"
          handleButtonClick={copyExportData}
          Icon={ContentCopyIcon}
        />
        <ImportExportSection
          title="Import"
          value={data}
          buttonText="Import Data"
          handleButtonClick={handleImportData}
          Icon={ImportExportIcon}
          handleChange={(event) => setData(event.target.value)}
        />
      </Grid>
    </>
  );
};

type ImportExportSectionProps = {
  title: string;
  value: string;
  isReadOnly?: boolean;
  buttonText: string;
  handleButtonClick: () => void;
  Icon: SvgIconComponent;
  handleChange?: (event: any) => void;
};

const ImportExportSection = ({
  title,
  value,
  isReadOnly = false,
  buttonText,
  handleButtonClick,
  Icon,
  handleChange,
}: ImportExportSectionProps) => {
  return (
    <Grid item sm={6} xs={12}>
      <Grid container direction="column" spacing={1}>
        <Grid item>
          <Typography variant="h6">{title}</Typography>
        </Grid>{' '}
        <Grid item>
          <Button color="secondary" onClick={handleButtonClick}>
            <Icon sx={{ mr: 1 }} /> {buttonText}
          </Button>
        </Grid>
        <Grid item>
          <TextareaAutosize
            readOnly={isReadOnly}
            minRows={30}
            style={{ width: '90%' }}
            value={value}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
