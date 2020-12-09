#!/bin/sh
score=0

timeout 10s grunt connect; 
if [ $? -eq 124 ] ; then 
score=$((score+100)) 
 fi

echo "FS_SCORE:$score%"
