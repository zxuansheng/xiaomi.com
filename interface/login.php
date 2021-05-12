<?php
    // 逻辑
    // 1. 连接数据库
    // 2. 接收数据
    // 3. 根据数据在数据中查找
    // 如果找到匹配的结果则为 登陆成功
    // 如果没有找到匹配的结构为 登陆失败 用户名或密码错误

    include('./library/conn.php');

    $username = $_REQUEST['username'];
    $password = $_REQUEST['password'];
    echo $username;
    $select = "select * from users where username='$username' and password='$password'";

    $result = $mysqli->query($select);

    $mysqli->close();

    if($result->num_rows>0){
        echo '<script>alert("登陆成功");</script>';
        echo '<script>location.href="../src/html/首页.html";</script>';
    }else{
        echo '<script>alert("用户名或密码错误");</script>';
        echo '<script>location.href="../src/html/登录.html";</script>';
    }
    
?>