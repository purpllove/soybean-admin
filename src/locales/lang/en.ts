const locale: I18nType.Schema = {
  system: {
    title: 'Purp Word'
  },
  common: {
    add: 'Add',
    addSuccess: 'Add Success',
    edit: 'Edit',
    editSuccess: 'Edit Success',
    delete: 'Delete',
    deleteSuccess: 'Delete Success',
    confirmDelete: 'Are you sure you want to delete?',
    batchDelete: 'Batch Delete',
    confirm: 'Confirm',
    cancel: 'Cancel',
    pleaseCheckValue: 'Please check the value is valid',
    action: 'Action',
    yesOrNo: {
      no: 'No',
      yes: 'Yes'
    }
  },
  routes: {
    dashboard: {
      _value: 'Dashboard',
      analysis: 'Analysis',
      workbench: 'Workbench'
    },
    document: {
      _value: 'Document',
      vue: 'Vue Document',
      vite: 'Vite Document',
      naive: 'NaiveUI Document',
      project: 'Project Document',
      'project-link': 'Project Document(href)'
    },
    component: {
      _value: 'Component',
      button: 'Button',
      card: 'Card',
      table: 'Table'
    },
    plugin: {
      _value: 'Plugin',
      charts: {
        _value: 'Chart',
        echarts: 'ECharts',
        antv: 'AntV',
        rend: 'Rend'
      },
      copy: 'Copy',
      editor: {
        _value: 'Editor',
        quill: 'Quill',
        markdown: 'Markdown'
      },
      icon: 'Icon',
      map: 'Map',
      print: 'Print',
      swiper: 'Swiper',
      video: 'Video'
    },
    'auth-demo': {
      _value: 'Auth Demo',
      permission: 'Toggle Permission',
      super: 'Super Auth'
    },
    function: {
      _value: 'Function',
      tab: 'System Tab'
    },
    exception: {
      _value: 'Exception',
      403: '403',
      404: '404',
      500: '500'
    },
    'multi-menu': {
      _value: 'Multi Degree Menu',
      first: {
        _value: 'First Degree',
        second: 'Second Degree',
        'second-new': {
          _value: 'Second Degree With Children',
          third: 'Third Degree'
        }
      }
    },
    management: {
      _value: 'System Management',
      auth: 'Auth',
      role: 'Role',
      route: 'Route',
      user: 'User',
      pageSetting: 'Page Setting'
    },
    front: {
      _value: 'Front',
      page: 'page'
    },
    about: 'About'
  },
  layout: {
    settingDrawer: {
      title: 'Theme configuration',
      themeModeTitle: 'Theme mode',
      darkMode: 'Dark mode',
      layoutModelTitle: 'Layout mode',
      systemThemeTitle: 'System theme',
      pageFunctionsTitle: 'Page functions',
      pageViewTitle: 'Page view',
      followSystemTheme: 'Follow the system',
      isCustomizeDarkModeTransition: 'Custom dark theme animation transition',
      scrollMode: 'scrollMode',
      scrollModeList: {
        wrapper: 'Outer layer scroll',
        content: 'Main body scroll'
      },
      fixedHeaderAndTab: 'Fixed header and multiple tabs',
      header: {
        inverted: 'darkHead',
        height: 'Head Height',
        crumb: {
          visible: 'Crumb',
          icon: 'Crumb icon'
        }
      },
      tab: {
        visible: 'Multi-page tab',
        height: 'Multiple tab height',
        modeList: {
          mode: 'Multi-tab style',
          chrome: 'Google style',
          button: 'Button style'
        },
        isCache: 'Multiple tab caching'
      },
      sider: {
        inverted: 'Dark sidebar',
        width: 'Sidebar expanded width',
        mixWidth: 'Left hybrid sidebar expanded width'
      },
      menu: {
        horizontalPosition: 'Top menu position',
        horizontalPositionList: {
          flexStart: 'Right',
          center: 'center',
          flexEnd: 'Left'
        }
      },
      footer: {
        inverted: 'Dark bottom',
        visible: 'Show bottom',
        fixed: 'Fixed bottom',
        right: 'Bottom to the right'
      },
      page: {
        animate: 'switch animation',
        animateMode: 'switch animation type',
        animateModeList: {
          zoomFade: 'Gradual change',
          zoomOut: 'Flash',
          fadeSlide: 'Slide',
          fade: 'Fade away',
          fadeBottom: 'Bottom fade',
          fadeScale: 'Resizing fade away'
        }
      },
      systemTheme: {
        moreColors: 'More colors'
      },
      themeConfiguration: {
        title: 'Theme configuration',
        copy: 'Copy the current configuration',
        reset: 'Reset the current configuration',
        resetSuccess: 'The configuration has been reset, please copy it again!',
        operateSuccess: 'Successful operation',
        copySuccess: 'Copy success, please replace the content of src/settings/theme.json!',
        confirmCopy: 'Confirm'
      }
    }
  },
  page: {
    login: {
      common: {
        userNamePlaceholder: 'Please enter user name',
        phonePlaceholder: 'Please enter phone number',
        codePlaceholder: 'Please enter verification code',
        passwordPlaceholder: 'Please enter password',
        confirmPasswordPlaceholder: 'Please enter password again',
        codeLogin: 'Verification code login',
        confirm: 'Confirm',
        back: 'Back',
        validateSuccess: 'Verification passed',
        loginSuccess: 'Login success',
        welcomeBack: 'Welcome back, {userName}!'
      },
      pwdLogin: {
        title: 'Password Login',
        rememberMe: 'Remember me',
        forgetPassword: 'Forget password?',
        register: 'Register account',
        otherAccountLogin: 'Other Account Login',
        otherLoginMode: 'Other Login Mode',
        superAdmin: 'Super Administrator',
        admin: 'Administrator',
        user: 'Ordinary User'
      },
      codeLogin: {
        title: 'Verification Code Login',
        getCode: 'Get verification code',
        imageCodePlaceholder: 'Please enter image verification code'
      },
      register: {
        title: 'Register Account',
        agreement: 'I have read and agree to',
        protocol: '《User Agreement》',
        policy: '《Privacy Policy》'
      },
      resetPwd: {
        title: 'Reset Password'
      },
      bindWeChat: {
        title: 'Bind WeChat'
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
