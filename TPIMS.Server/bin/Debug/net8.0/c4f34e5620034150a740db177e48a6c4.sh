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

ps 36677;
while [ $? -eq 0 ];
do
  sleep 1;
  ps 36677 > /dev/null;
done;

for child in $(list_child_processes 36693);
do
  echo killing $child;
  kill -s KILL $child;
done;
rm /Users/elviswu/Documents/c_sharp_proj/TPIMS/TPIMS.Server/bin/Debug/net8.0/c4f34e5620034150a740db177e48a6c4.sh;
