import React, { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Info, RefreshCw } from 'lucide-react';

interface DatePickerProps {
  checkIn: string; // YYYY-MM-DD
  checkOut: string; // YYYY-MM-DD
  onChange: (checkIn: string, checkOut: string) => void;
}

// Helper to convert YYYY-MM-DD string to local Date object (at midnight)
const parseLocalDate = (dateStr: string): Date | null => {
  if (!dateStr) return null;
  const [year, month, day] = dateStr.split('-').map(Number);
  return new Date(year, month - 1, day);
};

// Helper to convert local Date object to YYYY-MM-DD string
const formatLocalDate = (date: Date): string => {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
};

const WEEKDAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export const DatePicker: React.FC<DatePickerProps> = ({ checkIn, checkOut, onChange }) => {
  // Today with time reset to midnight for accurate comparisons
  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  // Track which month/year the calendar grid is displaying
  const [displayMonth, setDisplayMonth] = useState(() => {
    const initial = parseLocalDate(checkIn) || today;
    return new Date(initial.getFullYear(), initial.getMonth(), 1);
  });

  const parsedCheckIn = useMemo(() => parseLocalDate(checkIn), [checkIn]);
  const parsedCheckOut = useMemo(() => parseLocalDate(checkOut), [checkOut]);

  // Navigate months
  const nextMonth = () => {
    setDisplayMonth(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    // Prevent navigating to past months if the display month is already the current month or earlier
    const prevDate = new Date(displayMonth.getFullYear(), displayMonth.getMonth() - 1, 1);
    const todayMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    if (prevDate < todayMonth) return;
    setDisplayMonth(prevDate);
  };

  // Generate calendar days for displayMonth
  const calendarDays = useMemo(() => {
    const year = displayMonth.getFullYear();
    const month = displayMonth.getMonth();

    // First day of displayMonth (0 is Sunday, 1 is Monday, etc.)
    const firstDayIndex = new Date(year, month, 1).getDay();
    // Total days in displayMonth
    const totalDays = new Date(year, month + 1, 0).getDate();

    const days = [];

    // Pad previous month's days
    for (let i = 0; i < firstDayIndex; i++) {
      days.push(null);
    }

    // Current month's days
    for (let dayNum = 1; dayNum <= totalDays; dayNum++) {
      days.push(new Date(year, month, dayNum));
    }

    return days;
  }, [displayMonth]);

  const handleDayClick = (day: Date) => {
    if (day < today) return; // Prevent clicking past dates

    const dayStr = formatLocalDate(day);

    if (!checkIn || (checkIn && checkOut)) {
      // First click: Select Check-In, clear Check-Out
      onChange(dayStr, '');
    } else {
      // Second click:
      const currentCheckInDate = parsedCheckIn;
      if (currentCheckInDate && day > currentCheckInDate) {
        // Correct selection: clicked day is after check-in
        onChange(checkIn, dayStr);
      } else {
        // Fallback: clicked day is before or equal to check-in, set it as check-in
        onChange(dayStr, '');
      }
    }
  };

  // Helper to check selection states
  const getDayState = (day: Date | null) => {
    if (!day) return { type: 'empty' };

    const dayStr = formatLocalDate(day);
    const isPast = day < today;
    const isStart = checkIn === dayStr;
    const isEnd = checkOut === dayStr;
    
    let isRange = false;
    if (parsedCheckIn && parsedCheckOut && day > parsedCheckIn && day < parsedCheckOut) {
      isRange = true;
    }

    return {
      isPast,
      isStart,
      isEnd,
      isRange,
      dayStr
    };
  };

  const clearSelection = () => {
    onChange('', '');
  };

  return (
    <div className="w-full bg-slate-50 border border-slate-200/60 rounded-3xl p-6 select-none shadow-sm font-sans">
      {/* Selection Display */}
      <div className="grid grid-cols-2 gap-4 mb-6 border-b border-slate-200/60 pb-5">
        <div className="bg-white p-3.5 rounded-2xl border border-slate-200/40 relative shadow-sm">
          <span className="block text-[9px] text-slate-400 font-bold uppercase tracking-[0.2em] mb-1">Check-In</span>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#f59e0b] shrink-0" />
            <span className="text-slate-800 font-serif font-bold text-sm tracking-wide">
              {parsedCheckIn ? parsedCheckIn.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Select Date'}
            </span>
          </div>
        </div>
        
        <div className="bg-white p-3.5 rounded-2xl border border-slate-200/40 relative shadow-sm">
          <span className="block text-[9px] text-slate-400 font-bold uppercase tracking-[0.2em] mb-1">Check-Out</span>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-slate-400 shrink-0" />
            <span className="text-slate-800 font-serif font-bold text-sm tracking-wide">
              {parsedCheckOut ? parsedCheckOut.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Select Date'}
            </span>
          </div>
        </div>
      </div>

      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-5">
        <span className="text-sm font-serif font-bold text-slate-800 tracking-wide uppercase">
          {MONTHS[displayMonth.getMonth()]} {displayMonth.getFullYear()}
        </span>
        
        <div className="flex gap-2">
          <button
            type="button"
            onClick={prevMonth}
            disabled={displayMonth.getMonth() === today.getMonth() && displayMonth.getFullYear() === today.getFullYear()}
            className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 hover:text-slate-800 hover:bg-slate-100 disabled:opacity-30 disabled:hover:bg-white transition-all shadow-sm"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <button
            type="button"
            onClick={nextMonth}
            className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-all shadow-sm"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-y-1.5 text-center mb-5">
        {/* Weekdays */}
        {WEEKDAYS.map(day => (
          <span key={day} className="text-[10px] font-bold text-slate-400 uppercase tracking-widest py-1">
            {day}
          </span>
        ))}

        {/* Calendar Days */}
        {calendarDays.map((day, idx) => {
          if (!day) return <div key={`empty-${idx}`} />;

          const { isPast, isStart, isEnd, isRange } = getDayState(day);
          
          let dayClass = "relative aspect-square flex items-center justify-center text-xs font-semibold rounded-xl transition-all cursor-pointer select-none ";
          if (isPast) {
            dayClass += "text-slate-300 cursor-not-allowed pointer-events-none";
          } else if (isStart || isEnd) {
            dayClass += "bg-[#f59e0b] text-white shadow-md shadow-amber-500/20 font-bold scale-[1.05]";
          } else if (isRange) {
            dayClass += "bg-[#fef3c7] text-[#b45309] hover:bg-[#fde68a] rounded-none";
          } else {
            dayClass += "text-slate-700 hover:bg-slate-200/80 hover:scale-[1.03]";
          }

          // Special rounding for start/end of highlighted range
          let wrapperClass = "relative";
          if (isRange) {
            const dayOfWeek = day.getDay();
            if (dayOfWeek === 0) wrapperClass += " rounded-l-xl overflow-hidden";
            if (dayOfWeek === 6) wrapperClass += " rounded-r-xl overflow-hidden";
          }

          return (
            <div key={day.getTime()} className={wrapperClass}>
              <button
                type="button"
                onClick={() => handleDayClick(day)}
                disabled={isPast}
                className={`${dayClass} w-full h-full`}
              >
                {day.getDate()}
              </button>
            </div>
          );
        })}
      </div>

      {/* Footer / Instructions */}
      <div className="flex items-center justify-between text-[11px] text-slate-400 font-medium">
        <div className="flex items-center gap-1.5">
          <Info className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span>
            {!checkIn ? 'Select Check-In date' : !checkOut ? 'Select Check-Out date' : 'Stay period selected'}
          </span>
        </div>
        
        {(checkIn || checkOut) && (
          <button
            type="button"
            onClick={clearSelection}
            className="flex items-center gap-1 text-[#f59e0b] hover:text-[#d97706] font-bold uppercase tracking-wider transition-colors"
          >
            <RefreshCw className="w-3 h-3" />
            <span>Reset</span>
          </button>
        )}
      </div>
    </div>
  );
};
