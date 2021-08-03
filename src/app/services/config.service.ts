import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor() { }

  getAllConfigs() {
    return configsList;
  }
  createConfig(config:any){
    configsList.push(config)
  }
  deleteConfig(id:string){
    let index = configsList.findIndex(function(el){
      return el.configId === id;
    })
    if (index !== -1) configsList.splice(index, 1);
  }
  updateConfig(config:any){
    let index = configsList.findIndex(function(el){
      return el.configId === config.configId;
    })
    configsList[index]= config;
  }

}

let configsList = [
  {
    configName:'Test Config',
    configId: 'qwe113wqe123eqwe2312i24i23g5ugy2324h2fyd2uywgr',
    bet1: {
      home: true,
      favourite: true,
      sportsBook: ['MatchBookBet1'],
      pregame:true,
      minGameTime:12000,
      below:80,
      above:30,
      percentageChange:'78%'
    },
    bet2: {
      sportsBook: ['MatchBookBet2'],
      pregame:true,
      minGameTime:12000,
      below:80,
      above:30,
      percentageChange:'68%',
      qualification: {
        referenceLine: 43.5,
        range: 68.9,
        period: 48000
      },
      recoveryMargin: 65.98
    }
  },
  {
    configName:'Test Config',
    configId: 'qwe213wqe123eqwe2312i24i23g5ugy2324h2fyd2uywgr',
    bet1: {
      home: true,
      favourite: true,
      sportsBook: ['MatchBookBet1'],
      pregame:true,
      minGameTime:12000,
      below:80,
      above:30,
      percentageChange:'78%'
    },
    bet2: {
      sportsBook: ['MatchBookBet2'],
      pregame:true,
      minGameTime:12000,
      below:80,
      above:30,
      percentageChange:'68%',
      qualification: {
        referenceLine: 43.5,
        range: 68.9,
        period: 48000
      },
      recoveryMargin: 65.98
    }
  },
  {
    configName:'Test Config',
    configId: 'qwe313wqe123eqwe2312i24i23g5ugy2324h2fyd2uywgr',
    bet1: {
      home: true,
      favourite: true,
      sportsBook: ['MatchBookBet1'],
      pregame:true,
      minGameTime:12000,
      below:80,
      above:30,
      percentageChange:'78%'
    },
    bet2: {
      sportsBook: ['MatchBookBet2'],
      pregame:true,
      minGameTime:12000,
      below:80,
      above:30,
      percentageChange:'68%',
      qualification: {
        referenceLine: 43.5,
        range: 68.9,
        period: 48000
      },
      recoveryMargin: 65.98
    }
  },
  {
    configName:'Test Config',
    configId: 'qwe413wqe123eqwe2312i24i23g5ugy2324h2fyd2uywgr',
    bet1: {
      home: true,
      favourite: true,
      sportsBook: ['MatchBookBet1'],
      pregame:true,
      minGameTime:12000,
      below:80,
      above:30,
      percentageChange:'78%'
    },
    bet2: {
      sportsBook: ['MatchBookBet2'],
      pregame:true,
      minGameTime:12000,
      below:80,
      above:30,
      percentageChange:'68%',
      qualification: {
        referenceLine: 43.5,
        range: 68.9,
        period: 48000
      },
      recoveryMargin: 65.98
    }
  },
  {
    configName:'Test Config',
    configId: 'qwe513wqe123eqwe2312i24i23g5ugy2324h2fyd2uywgr',
    bet1: {
      home: true,
      favourite: true,
      sportsBook: ['MatchBookBet1'],
      pregame:true,
      minGameTime:12000,
      below:80,
      above:30,
      percentageChange:'78%'
    },
    bet2: {
      sportsBook: ['MatchBookBet2'],
      pregame:true,
      minGameTime:12000,
      below:80,
      above:30,
      percentageChange:'68%',
      qualification: {
        referenceLine: 43.5,
        range: 68.9,
        period: 48000
      },
      recoveryMargin: 65.98
    }
  },
  {
    configName:'Test Config',
    configId: 'qwe613wqe123eqwe2312i24i23g5ugy2324h2fyd2uywgr',
    bet1: {
      home: true,
      favourite: true,
      sportsBook: ['MatchBookBet1'],
      pregame:true,
      minGameTime:12000,
      below:80,
      above:30,
      percentageChange:'78%'
    },
    bet2: {
      sportsBook: ['MatchBookBet2'],
      pregame:true,
      minGameTime:12000,
      below:80,
      above:30,
      percentageChange:'68%',
      qualification: {
        referenceLine: 43.5,
        range: 68.9,
        period: 48000
      },
      recoveryMargin: 65.98
    }
  },
  {
    configName:'Test Config',
    configId: 'qwe713wqe123eqwe2312i24i23g5ugy2324h2fyd2uywgr',
    bet1: {
      home: true,
      favourite: true,
      sportsBook: ['MatchBookBet1'],
      pregame:true,
      minGameTime:12000,
      below:80,
      above:30,
      percentageChange:'78%'
    },
    bet2: {
      sportsBook: ['MatchBookBet2'],
      pregame:true,
      minGameTime:12000,
      below:80,
      above:30,
      percentageChange:'68%',
      qualification: {
        referenceLine: 43.5,
        range: 68.9,
        period: 48000
      },
      recoveryMargin: 65.98
    }
  },
  {
    configName:'Test Config',
    configId: 'qwe813wqe123eqwe2312i24i23g5ugy2324h2fyd2uywgr',
    bet1: {
      home: true,
      favourite: true,
      sportsBook: ['MatchBookBet1'],
      pregame:true,
      minGameTime:12000,
      below:80,
      above:30,
      percentageChange:'78%'
    },
    bet2: {
      sportsBook: ['MatchBookBet2'],
      pregame:true,
      minGameTime:12000,
      below:80,
      above:30,
      percentageChange:'68%',
      qualification: {
        referenceLine: 43.5,
        range: 68.9,
        period: 48000
      },
      recoveryMargin: 65.98
    }
  },
  {
    configName:'Test Config',
    configId: 'qwe913wqe123eqwe2312i24i23g5ugy2324h2fyd2uywgr',
    bet1: {
      home: true,
      favourite: true,
      sportsBook: ['MatchBookBet1'],
      pregame:true,
      minGameTime:12000,
      below:80,
      above:30,
      percentageChange:'78%'
    },
    bet2: {
      sportsBook: ['MatchBookBet2'],
      pregame:true,
      minGameTime:12000,
      below:80,
      above:30,
      percentageChange:'68%',
      qualification: {
        referenceLine: 43.5,
        range: 68.9,
        period: 48000
      },
      recoveryMargin: 65.98
    }
  },
  {
    configName:'Test Confg',
    configId: 'qwe1013wqe123eqwe2312i24i23g5ugy2324h2fyd2uywgr',
    bet1: {
      home: true,
      favourite: true,
      sportsBook: ['MatchBookBet1'],
      pregame:true,
      minGameTime:12000,
      below:80,
      above:30,
      percentageChange:'78%'
    },
    bet2: {
      sportsBook: ['MatchBookBet2'],
      pregame:true,
      minGameTime:12000,
      below:80,
      above:30,
      percentageChange:'68%',
      qualification: {
        referenceLine: 43.5,
        range: 68.9,
        period: 48000
      },
      recoveryMargin: 65.98
    }
  },

]
