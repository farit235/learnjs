if (-1 || 0) alert("first"); // work, -1||0 = -1 в логическом представлении true
if (-1 && 0) alert("second"); // doesn't work, -1 && 0 = 0,  в логическом представлении false
if (null || (-1 && 1)) alert("third"); //work, null || -1 && 1  ->  null || 1  ->  1 , тк у лог "И" имеет больший приоритет
