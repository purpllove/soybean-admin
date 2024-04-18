const locale: I18nType.Schema = {
  system: {
    title: 'ប្រព័ន្ធគ្រប់គ្រង'
  },
  common: {
    add: 'បន្ថែម',
    addSuccess: 'បន្ថែមជោគជ័យ',
    edit: 'កែប្រែ',
    editSuccess: 'កែប្រែជោគជ័យ',
    delete: 'លុប',
    deleteSuccess: 'លុបជោគជ័យ',
    confirmDelete: 'Are you sure you want to delete?',
    batchDelete: 'លុបច្រើន',
    confirm: 'យល់ព្រម',
    cancel: 'បោះបង់',
    pleaseCheckValue: 'សូមពិនិត្យមើលតម្លៃដែលបានបញ្ចូលដើម្បីបញ្ជាក់ថាត្រូវប្រើប្រាស់បាន',
    action: 'សកម្មភាព',
    yesOrNo: {
      no: 'No',
      yes: 'Yes'
    }
  },
  routes: {
    dashboard: {
      _value: 'ផ្ទាំងទិន្នន័យ',
      analysis: 'ផ្ទាំងវិភាគ',
      workbench: 'ផ្ទាំងការងារ'
    },
    document: {
      _value: 'ឯកសារ',
      vue: 'ឯកសារ​ Vue',
      vite: 'ឯកសារ​ Vite',
      naive: 'ឯកសារ NaiveUI',
      project: 'ឯកសារគម្រោង',
      'project-link': 'ឯកសារគម្រោង(href)'
    },
    component: {
      _value: 'សមាស​ភាគ',
      button: 'ប៊ូតុង',
      card: 'កាត',
      table: 'តារាង'
    },
    plugin: {
      _value: 'មុខងារជំនួយ',
      charts: {
        _value: 'តារាង​ Chart',
        echarts: 'តារាង ECharts',
        antv: 'AntV',
        rend: 'Rend'
      },
      copy: 'ចម្លង',
      editor: {
        _value: 'កែប្រែ',
        quill: 'Quill',
        markdown: 'Markdown'
      },
      icon: 'អាយខន',
      map: 'ផែនទី',
      print: 'បោះពុម្ភ',
      swiper: 'Swiper',
      video: 'វីដេអូ'
    },
    'auth-demo': {
      _value: 'ឌីមូ Auth',
      permission: 'បិទ/បើកការអនុញ្ញាត',
      super: 'Super Auth'
    },
    function: {
      _value: 'មុខងារ',
      tab: 'ថេបប្រព័ន្ធ'
    },
    exception: {
      _value: 'ករណីពិេសស',
      403: '403',
      404: '404',
      500: '500'
    },
    'multi-menu': {
      _value: 'ម៉ឺនុយពហុដឺក្រេ',
      first: {
        _value: 'ដឺក្រេទី១',
        second: 'ដែក្រេទី២',
        'second-new': {
          _value: 'ដឺក្រេទី២មានអនុក្រោម',
          third: 'ដឺក្រេទី៣'
        }
      }
    },
    management: {
      _value: 'ការគ្រប់គ្រងប្រព័ន្ធ',
      auth: 'Auth',
      role: 'សិទ្ធី',
      route: 'ផ្លូវប្រព័ន្ធ',
      user: 'អ្នកប្រើប្រាស់',
      pageSetting: 'Page Setting'
    },
    front: {
      _value: 'Front',
      page: 'page'
    },
    about: 'អំពីប្រព័ន្ធ'
  },
  layout: {
    settingDrawer: {
      title: 'ការកំណត់ស្បែក',
      themeModeTitle: 'ស្បែករបស់របស់អ្នក',
      darkMode: 'របៀបងារស្បែកងងឹត',
      layoutModelTitle: 'របៀបប្រើប្រាស់របស់អ្នក',
      systemThemeTitle: 'ស្បែករបស់ប្រព័ន្ធគ្រប់គ្រង',
      pageFunctionsTitle: 'មុខងារទំនាក់ទំនងរបស់ទំព័រ',
      pageViewTitle: 'ទំព័រទស្សន៍ទាយ',
      followSystemTheme: 'តាមដានស្បែកប្រព័ន្ធគ្រប់គ្រង',
      isCustomizeDarkModeTransition: 'ប្រើប្រាស់របៀបងារស្បែកងងឹតផ្ទាល់ខ្លួន',
      scrollMode: 'របៀបរុករក',
      scrollModeList: {
        wrapper: 'រុករកជាក់លាក់',
        content: 'រុករកមានមុខងារ'
      },
      fixedHeaderAndTab: 'បិទការរុករកជាក់លាក់និងរុករកមានមុខងារ',
      header: {
        inverted: 'បង្កើតការរុករកជាក់លាក់',
        height: 'កម្ពស់',
        crumb: {
          visible: 'បង្ហាញរុករកជាក់លាក់',
          icon: 'រុករកជាក់លាក់រូបតំណាង'
        }
      },
      tab: {
        visible: 'បង្ហាញរុករកជាក់លាក់',
        height: 'កម្ពស់',
        modeList: {
          mode: 'របៀប',
          chrome: 'ក្រុមហ៊ុន',
          button: 'ប៊ូតុង'
        },
        isCache: 'រក្សាទុកការរុករកជាក់លាក់'
      },
      sider: {
        inverted: 'បង្កើតការរុករកជាក់លាក់',
        width: 'ទទឹង',
        mixWidth: 'ទទឹងបញ្ចូល'
      },
      menu: {
        horizontalPosition: 'ទីតាំងផ្ដេក',
        horizontalPositionList: {
          flexStart: 'ចាប់ផ្ដើមឈុត',
          center: 'កណ្តាល',
          flexEnd: 'ចាប់ផ្ដើមចុងក្រោយ'
        }
      },
      footer: {
        inverted: 'បង្កើតការរុករកជាក់លាក់',
        visible: 'បង្ហាញការរុករកជាក់លាក់',
        fixed: 'ការរុករកជាក់លាក់',
        right: 'ត្រឡប់ទៅស្តាំ'
      },
      page: {
        animate: 'ការផ្លាស់ប្តូរ',
        animateMode: 'របៀបផ្លាស់ប្តូរ',
        animateModeList: {
          zoomFade: 'ពង្រីកបង្ហាញនិងលាស់ប្តូរ',
          zoomOut: 'ពង្រីកបង្ហាញនិងលាស់ប្តូរ',
          fadeSlide: 'ពង្រីកបង្ហាញនិងលាស់ប្តូរ',
          fade: 'ពង្រីកបង្ហាញនិងលាស់ប្តូរ',
          fadeBottom: 'ពង្រីកបង្ហាញនិងលាស់ប្តូរ',
          fadeScale: 'ពង្រីកបង្ហាញនិងលាស់ប្តូរ'
        }
      },
      systemTheme: {
        moreColors: 'ពន្លឺច្រើនទៀត'
      },
      themeConfiguration: {
        title: 'ការកំណត់ស្បែក',
        copy: 'ចម្លង',
        reset: 'កំណត់ឡើងវិញ',
        resetSuccess: 'កំណត់ឡើងវិញជោគជ័យ, សូមចម្លងឯកសារស្បែកឡើងវិញ!',
        operateSuccess: 'សម្រាប់ការប្រើប្រាស់ជោគជ័យ',
        copySuccess: 'ចម្លងជោគជ័យ, សូមជោគជ័យឯកសារ src/settings/theme.json!',
        confirmCopy: 'យល់ព្រម'
      }
    }
  },
  page: {
    login: {
      common: {
        userNamePlaceholder: 'ឈ្មោះអ្នកប្រើប្រាស់',
        phonePlaceholder: 'លេខទូរស័ព្ទ',
        codePlaceholder: 'លេខកូដ',
        passwordPlaceholder: 'លេខសម្ងាត់',
        confirmPasswordPlaceholder: 'បញ្ជាក់លេខសម្ងាត់',
        codeLogin: 'ចូលតាមលេខកូដ',
        confirm: 'យល់ព្រម',
        back: 'ត្រឡប់ក្រោយ',
        validateSuccess: 'បញ្ជាក់ជោគជ័យ',
        loginSuccess: 'ចូលជោគជ័យ',
        welcomeBack: 'សូមស្វាគមន៍ម្តងទៀត, {userName}!'
      },
      pwdLogin: {
        title: 'ចូលគណនី',
        rememberMe: 'ចងចាំខ្ញុំ',
        forgetPassword: 'ភ្លេចលេខសម្ងាត់',
        register: 'ចុះឈ្មោះ',
        otherAccountLogin: 'ចូលតាមគណនីផ្សេងទៀត',
        otherLoginMode: 'របៀបចូលគណនីផ្សេងទៀត',
        superAdmin: 'អ្នកគ្រប់គ្រងសុវត្ថិភាព',
        admin: 'អ្នកគ្រប់គ្រង',
        user: 'អ្នកប្រើប្រាស់'
      },
      codeLogin: {
        title: 'ចូលតាមលេខកូដ',
        getCode: 'ទទួលលេខកូដ',
        imageCodePlaceholder: 'លេខកូដរូបភាព'
      },
      register: {
        title: 'ចុះឈ្មោះ',
        agreement: 'យល់ព្រមនឹង',
        protocol: 'សម្រាប់ការប្រើប្រាស់',
        policy: 'គោលការណ៍ផ្សេងៗ'
      },
      resetPwd: {
        title: 'កំណត់លេខសម្ងាត់ថ្មី'
      },
      bindWeChat: {
        title: 'ភ្ជាប់គណនីរបស់អ្នកជាមួយគណនីរបស់អ្នក'
      }
    },
    manage: {
      common: {
        status: {
          enable: 'Enable',
          disable: 'Disable'
        }
      },
      role: {
        title: 'Role List',
        roleName: 'Role Name',
        roleCode: 'Role Code',
        roleStatus: 'Role Status',
        roleDesc: 'Role Description',
        menuAuth: 'Menu Auth',
        buttonAuth: 'Button Auth',
        form: {
          roleName: 'Please enter role name',
          roleCode: 'Please enter role code',
          roleStatus: 'Please select role status',
          roleDesc: 'Please enter role description'
        },
        addRole: 'Add Role',
        editRole: 'Edit Role'
      },
      user: {
        title: 'User List',
        userName: 'User Name',
        userGender: 'Gender',
        nickName: 'Nick Name',
        userPhone: 'Phone Number',
        userEmail: 'Email',
        userStatus: 'User Status',
        userRole: 'User Role',
        form: {
          userName: 'Please enter user name',
          userGender: 'Please select gender',
          nickName: 'Please enter nick name',
          userPhone: 'Please enter phone number',
          userEmail: 'Please enter email',
          userStatus: 'Please select user status',
          userRole: 'Please select user role'
        },
        addUser: 'Add User',
        editUser: 'Edit User',
        gender: {
          male: 'Male',
          female: 'Female'
        }
      },
      menu: {
        home: 'Home',
        title: 'Menu List',
        id: 'ID',
        parentId: 'Parent ID',
        menuType: 'Menu Type',
        menuName: 'Menu Name',
        routeName: 'Route Name',
        routePath: 'Route Path',
        routeParams: 'Route Params',
        layout: 'Layout Component',
        page: 'Page Component',
        i18nKey: 'I18n Key',
        icon: 'Icon',
        localIcon: 'Local Icon',
        iconTypeTitle: 'Icon Type',
        order: 'Order',
        keepAlive: 'Keep Alive',
        href: 'Href',
        hideInMenu: 'Hide In Menu',
        activeMenu: 'Active Menu',
        multiTab: 'Multi Tab',
        fixedIndexInTab: 'Fixed Index In Tab',
        button: 'Button',
        buttonCode: 'Button Code',
        buttonDesc: 'Button Desc',
        menuStatus: 'Menu Status',
        form: {
          home: 'Please select home',
          menuType: 'Please select menu type',
          menuName: 'Please enter menu name',
          routeName: 'Please enter route name',
          routePath: 'Please enter route path',
          page: 'Please select page component',
          layout: 'Please select layout component',
          i18nKey: 'Please enter i18n key',
          icon: 'Please enter iconify name',
          localIcon: 'Please enter local icon name',
          order: 'Please enter order',
          keepAlive: 'Please select whether to cache route',
          href: 'Please enter href',
          hideInMenu: 'Please select whether to hide menu',
          activeMenu: 'Please enter the route name of the highlighted menu',
          multiTab: 'Please select whether to support multiple tabs',
          fixedInTab: 'Please select whether to fix in the tab',
          fixedIndexInTab: 'Please enter the index fixed in the tab',
          button: 'Please select whether it is a button',
          buttonCode: 'Please enter button code',
          buttonDesc: 'Please enter button description',
          menuStatus: 'Please select menu status'
        },
        addMenu: 'Add Menu',
        editMenu: 'Edit Menu',
        addChildMenu: 'Add Child Menu',
        type: {
          directory: 'Directory',
          menu: 'Menu',
          childMenu: 'Child Menu',
          datailMenu: 'Detail Menu'
        },
        iconType: {
          iconify: 'Iconify Icon',
          local: 'Local Icon'
        }
      }
    }
  }
};

export default locale;
