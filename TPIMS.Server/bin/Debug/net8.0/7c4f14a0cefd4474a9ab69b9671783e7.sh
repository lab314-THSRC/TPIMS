function list_child_processes () {
    local ppid=$1;
    local current_children=$(pgrep -P $ppid);
    local local_child;
    if [ $? -eq 0 ];
    then
        for current_child in $current_children
        do
          local_child=$current_child;
          list_child_processes $local_child;
          echo $local_child;
        done;
    else
      return 0;
    fi;
}

ps 30420;
while [ $? -eq 0 ];
do
  sleep 1;
  ps 30420 > /dev/null;
done;

for child in $(list_child_processes 30435);
do
  echo killing $child;
  kill -s KILL $child;
done;
rm /Users/elviswu/Documents/c_sharp_proj/TPIMS/TPIMS.Server/bin/Debug/net8.0/7c4f14a0cefd4474a9ab69b9671783e7.sh;
