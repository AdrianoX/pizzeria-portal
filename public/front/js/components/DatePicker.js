/* eslint-disable linebreak-style */
import utils from '../utils.js';
import {select, settings} from '../settings.js';
import BaseWidget from './BaseWidget.js';


class DatePicker extends BaseWidget{
  constructor(wrapper){
    super(wrapper, utils.dateToStr(new Date()));

    const thisWidget = this;
    thisWidget.dom.input = thisWidget.dom.wrapper.querySelector(select.widgets.datePicker.input);

    thisWidget.initPlugin();
  }

  initPlugin(){
    const thisWidget = this;

    thisWidget.minDate = new Date(thisWidget.value);
    thisWidget.maxDate = utils.addDays(thisWidget.minDate, settings.datePicker.maxDaysInFuture);


    // eslint-disable-next-line no-undef
    flatpickr(thisWidget.dom.input, {
      defaultDate: thisWidget.minDate,
      minDate: thisWidget.minDate,
      maxDate: thisWidget.maxDate,
      disable: [
        function(date) {
          // return true to disable
          return (date.getDay() === 1);
        }
      ],
      locale: {
        firstDayOfWeek: 1 // start week on Monday  date 2020-03-03 00:00:00 -> 2020-03-02 23:00:00
      },
      onChange: function(dates) { 
        thisWidget.value = dates[0];
      },      
    });
  }

  parseValue(value){
    return utils.dateToStr(utils.addDays(value, 1));
  }

  isValid(){
    return true;
  }

  renderValue(){
  }
}

export default DatePicker;