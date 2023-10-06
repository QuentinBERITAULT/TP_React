import React from 'react';

const WeatherDisplay = ({ data }) => {
    let conseil = '';
    let img = null;

    switch (data.condition) {
        case 'Sunny':
            conseil = 'Portez des vêtements légers.';
            img=<svg viewBox="0 0 512 512" fill="currentColor" height="4em" width="4em">
            <path d="M256 118a22 22 0 01-22-22V48a22 22 0 0144 0v48a22 22 0 01-22 22zM256 486a22 22 0 01-22-22v-48a22 22 0 0144 0v48a22 22 0 01-22 22zM369.14 164.86a22 22 0 01-15.56-37.55l33.94-33.94a22 22 0 0131.11 31.11l-33.94 33.94a21.93 21.93 0 01-15.55 6.44zM108.92 425.08a22 22 0 01-15.55-37.56l33.94-33.94a22 22 0 1131.11 31.11l-33.94 33.94a21.94 21.94 0 01-15.56 6.45zM464 278h-48a22 22 0 010-44h48a22 22 0 010 44zM96 278H48a22 22 0 010-44h48a22 22 0 010 44zM403.08 425.08a21.94 21.94 0 01-15.56-6.45l-33.94-33.94a22 22 0 0131.11-31.11l33.94 33.94a22 22 0 01-15.55 37.56zM142.86 164.86a21.89 21.89 0 01-15.55-6.44l-33.94-33.94a22 22 0 0131.11-31.11l33.94 33.94a22 22 0 01-15.56 37.55zM256 358a102 102 0 11102-102 102.12 102.12 0 01-102 102z" />
          </svg>
            break;
        case 'Cloudy':
            conseil = 'Un gilet léger pourrait être utile.';
            img =  <svg viewBox="0 0 1024 1024" fill="currentColor" height="4em" width="4em">
            <path d="M811.4 418.7C765.6 297.9 648.9 212 512.2 212S258.8 297.8 213 418.6C127.3 441.1 64 519.1 64 612c0 110.5 89.5 200 199.9 200h496.2C870.5 812 960 722.5 960 612c0-92.7-63.1-170.7-148.6-193.3z" />
          </svg>
            break;
        case 'Windy':
            conseil = 'Portez des vêtements qui se protègent du vent.';
            img=<svg viewBox="0 0 24 24" fill="currentColor" height="4em" width="4em">
            <path d="M6 6l.69.06A5.499 5.499 0 0112 2a5.5 5.5 0 015.5 5.5l-.08.95c.46-.29 1-.45 1.58-.45a3 3 0 013 3 3 3 0 01-3 3H6a4 4 0 01-4-4 4 4 0 014-4m0 2a2 2 0 00-2 2 2 2 0 002 2h13a1 1 0 001-1 1 1 0 00-1-1h-3.5V7.5A3.5 3.5 0 0012 4a3.5 3.5 0 00-3.5 3.5V8H6m12 10H4a1 1 0 01-1-1 1 1 0 011-1h14a3 3 0 013 3 3 3 0 01-3 3c-.83 0-1.58-.34-2.12-.88-.38-.39-.38-1.02 0-1.41a.996.996 0 011.41 0c.18.18.43.29.71.29a1 1 0 001-1 1 1 0 00-1-1z" />
          </svg>
            break;
        case 'Rainy':
            conseil = 'Prenez un parapluie et portez un imperméable.';
            img = <svg fill="currentColor" viewBox="0 0 16 16" height="4em" width="4em">
            <path d="M4.158 12.025a.5.5 0 01.316.633l-.5 1.5a.5.5 0 11-.948-.316l.5-1.5a.5.5 0 01.632-.317zm3 0a.5.5 0 01.316.633l-1 3a.5.5 0 11-.948-.316l1-3a.5.5 0 01.632-.317zm3 0a.5.5 0 01.316.633l-.5 1.5a.5.5 0 11-.948-.316l.5-1.5a.5.5 0 01.632-.317zm3 0a.5.5 0 01.316.633l-1 3a.5.5 0 11-.948-.316l1-3a.5.5 0 01.632-.317zm.247-6.998a5.001 5.001 0 00-9.499-1.004A3.5 3.5 0 103.5 11H13a3 3 0 00.405-5.973z" />
          </svg>
            break;
        case 'Stormy':
            conseil = 'Soyez en sécurité chez vous.';
            img=<svg fill="currentColor" viewBox="0 0 16 16" height="4em" width="4em">
            <path d="M7.053 11.276A.5.5 0 017.5 11h1a.5.5 0 01.474.658l-.28.842H9.5a.5.5 0 01.39.812l-2 2.5a.5.5 0 01-.875-.433L7.36 14H6.5a.5.5 0 01-.447-.724l1-2zm6.352-7.249a5.001 5.001 0 00-9.499-1.004A3.5 3.5 0 103.5 10H13a3 3 0 00.405-5.973z" />
          </svg>
            break;
        default:
            conseil = 'Consultez les prévisions pour plus de détails sur la météo.';
      }

  return (
    <div>
        <div className="container">
            <p><b>{data.city}</b>  |  FRANCE</p>
            <hr />
            <table width="100%"  cellspacing="0" cellpadding="0">
                <tr>
                    <td><b style={{ fontSize: '2em'}}>{data.temperature}°C</b></td>
                    <td rowspan="2">{img}</td>
                </tr>
                <tr>
                    <td>{data.condition} </td>
                </tr>
            </table>
            <hr />
            <p>{conseil}</p>
            <br />
        </div>
    </div>
  );
};

export default WeatherDisplay;