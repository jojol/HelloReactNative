import React from "react";
import Storage from "react-native-storage";
import {AsyncStorage} from 'react-native';


const key_settings = "settings6";
const key_userinfo = "userinfo";
// create a component
export class Settings{
    guideOpen:boolean;
    settingName:string;
    counts:number;
    isGuideOpen:Function;

    constructor(){
        this.guideOpen = true;
        this.counts = 1;
        this.settingName = "CommonSettings";
        console.log("Settings" + this.isGuideOpen);
    }

    isGuideOpen = ()=>{
        return this.guideOpen;
    }

}


class UserSetting {
    static settings:Settings;

    static storage = new Storage({
        // 最大容量，默认值1000条数据循环存储
        size: 1000,
        // 存储引擎：对于RN使用AsyncStorage，对于web使用window.localStorage
        // 如果不指定则数据只会保存在内存中，重启后即丢失
        storageBackend: AsyncStorage,
        // 数据过期时间，默认一整天（1000 * 3600 * 24 毫秒），设为null则永不过期
        defaultExpires: 1000 * 3600 * 24,
        // 读写时在内存中缓存数据。默认启用。
        enableCache: true,
        // 如果storage中没有相应数据，或数据已过期，
        // 则会调用相应的sync方法，无缝返回最新数据。
        // sync方法的具体说明会在后文提到
        // 你可以在构造函数这里就写好sync的方法
        // 或是写到另一个文件里，这里require引入
        // 或是在任何时候，直接对storage.sync进行赋值修改
        // sync: require('./sync')  // 这个sync文件是要你自己写的
    })

    static saveSettings = () => {
        console.log('saveSettings');
        // 使用key来保存数据。这些数据一般是全局独有的，常常需要调用的。
        // 除非你手动移除，这些数据会被永久保存，而且默认不会过期。
        if (UserSetting.settings) {
            UserSetting.storage.save({
                key: key_settings,  // 注意:请不要在key中使用_下划线符号!
                data: UserSetting.settings,

                // 如果不指定过期时间，则会使用defaultExpires参数
                // 如果设为null，则永不过期
                // expires: 1000 * 3600
                expires: null
            });
            return true;
        }
        return false;
    };

    static loadSettings = async () => {
        console.log('loadSettings');
        let defSettings = new Settings();
        // 使用key来保存数据。这些数据一般是全局独有的，常常需要调用的。
        // 除非你手动移除，这些数据会被永久保存，而且默认不会过期。
        console.log('pre load UserSetting.settings:' + UserSetting.settings);
        console.log(UserSetting.settings);
        if (!UserSetting.settings) {
            console.log('start load');
            try {
                let ret = await UserSetting.storage.load({
                    key: key_settings,
                    // autoSync(默认为true)意味着在没有找到数据或数据过期时自动调用相应的sync方法
                    autoSync: false,
                    // syncInBackground(默认为true)意味着如果数据过期，
                    // 在调用sync方法的同时先返回已经过期的数据。
                    // 设置为false的话，则等待sync方法提供的最新数据(当然会需要更多时间)。
                    syncInBackground: false,
                });
                // 如果找到数据，则在then方法中返回
                // 注意：这是异步返回的结果（不了解异步请自行搜索学习）
                // 你只能在then这个方法内继续处理ret数据
                // 而不能在then以外处理
                // 也没有办法“变成”同步返回
                // 你也可以使用“看似”同步的async/await语法
                // console.log(ret);

                // UserSetting.settings = ret;
                console.log(ret);
                // if (!UserSetting.settings){
                //     UserSetting.settings = defSettings;
                // }
                Object.assign(defSettings,ret);
                UserSetting.settings = defSettings;
                console.log(UserSetting.settings)
                return UserSetting.settings;
            } catch (e) {
                console.log('failed load');
                UserSetting.settings = defSettings;
                return UserSetting.settings;
            }
        } else {
            console.log('direct without load');
            return UserSetting.settings;
        }
    }
}

export default UserSetting;
