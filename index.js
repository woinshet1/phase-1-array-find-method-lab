function superbowlWin(record) {
    let d = record.find(function(winning_year) {
        return winning_year.result === 'W';
   })
   return !!d ? d.year : d;
}