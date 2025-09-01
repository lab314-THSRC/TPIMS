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

ps 46233;
while [ $? -eq 0 ];
do
  sleep 1;
  ps 46233 > /dev/null;
done;

for child in $(list_child_processes 46248);
do
  echo killing $child;
  kill -s KILL $child;
done;
rm /Users/elviswu/Documents/c_sharp_proj/TPIMS/TPIMS.Server/bin/Debug/net8.0/9b34be62c9f649a1aa9687817c8e5422.sh;
