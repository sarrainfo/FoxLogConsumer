export const datas = [
    {
        host:'127.0.0.1',
        logName: '-',
        authUser:'sarra',
        date:'20 mars',
        method:'POST',
        url: '/test/api/foxLog',
        section: '/test',
        version:'123',
        status: '401',
        bytes: '-'

    },
    {
        host:'127.0.0.1',
        logName: '-',
        authUser:'sarra',
        date:'20 mars',
        method:'POST',
        url: '/test',
        section: '/test',
        version:'123',
        status: '200',
        bytes: '-'

    },
    {
        host:'127.0.0.1',
        logName: 'Hellal',
        authUser:'sarra',
        date:'20 mars',
        method:'GET',
        url: '/name',
        section: '/name',
        version:'123',
        status: '200',
        bytes: '10'
  
      },
      {
        host:'127.0.0.8',
        logName: 'Hellal',
        authUser:'foxlog',
        date:'20 mars',
        method:'GET',
        url: '/name',
        section: '/name',
        version:'123',
        status: '100',
        bytes: '10'
  
      }
  ];

  export const w3cFormatHttp='127.0.0.1 - - [06/Mar/2020:13:46:38 +0000] \"GET /report HTTP/1.1\" 304 -';
  export const w3cFormatHttp2='127.0.0.1 - - [06/Mar/2020:13:46:38 +0000] \"GET /test/foxLog/sarra HTTP/1.1\" 304 -';