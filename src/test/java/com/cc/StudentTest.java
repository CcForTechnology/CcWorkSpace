package com.cc;

import com.nue.dao.IStudentDao;
import com.nue.dao.impl.StudentDaoImpl;
import org.junit.Before;
import org.junit.Test;

/**
 * @Author:Cc
 * @Date:2018/8/21
 * @program: firstday
 * @description: ${description 测试第一个插入数据库例子}
 * @create: 2018-08-21 11:12
 */
public class StudentTest {
    private IStudentDao dao;
    @Before
    public void before(){
        dao = new StudentDaoImpl();
    }
    @Test
    public void testInsert(){
        /*使用有参构造方法*/
        Student student = new Student("小翁",20,80);
        /*传入student对象执行insertStudent方法*/
        dao.insertStudent(student);

    }

}
