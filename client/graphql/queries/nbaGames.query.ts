import { gql } from 'apollo-boost';

export default gql`
  {
    nba {
      games {
        gameId
        isGameActivated
        statusNum
        startTimeEastern
        period {
          current
          isHalftime
        }
        vTeam {
          triCode
          win
          loss
          score
        }
        hTeam {
          triCode
          win
          loss
          score
        }
      }
    }
  }
`;
