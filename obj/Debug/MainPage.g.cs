﻿#pragma checksum "D:\WorkSpace\PEDD\ScanQRCode Prototype\ScanQRCode.Prototype\ScanQRCode.Prototype\MainPage.xaml" "{406ea660-64cf-4c82-b6f0-42d48172a799}" "902023A9C16D675D862D2E53E6F6AB76"
//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.33440
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

using Microsoft.Phone.Controls;
using System;
using System.Windows;
using System.Windows.Automation;
using System.Windows.Automation.Peers;
using System.Windows.Automation.Provider;
using System.Windows.Controls;
using System.Windows.Controls.Primitives;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Ink;
using System.Windows.Input;
using System.Windows.Interop;
using System.Windows.Markup;
using System.Windows.Media;
using System.Windows.Media.Animation;
using System.Windows.Media.Imaging;
using System.Windows.Resources;
using System.Windows.Shapes;
using System.Windows.Threading;


namespace BarcodeScanner {
    
    
    public partial class Scanner : Microsoft.Phone.Controls.PhoneApplicationPage {
        
        internal System.Windows.Controls.Grid LayoutRoot;
        
        internal System.Windows.Shapes.Rectangle _previewRect;
        
        internal System.Windows.Media.VideoBrush _previewVideo;
        
        internal System.Windows.Media.CompositeTransform _previewTransform;
        
        internal System.Windows.Controls.Button _focusButton;
        
        private bool _contentLoaded;
        
        /// <summary>
        /// InitializeComponent
        /// </summary>
        [System.Diagnostics.DebuggerNonUserCodeAttribute()]
        public void InitializeComponent() {
            if (_contentLoaded) {
                return;
            }
            _contentLoaded = true;
            System.Windows.Application.LoadComponent(this, new System.Uri("/ScanQRCode.Prototype;component/MainPage.xaml", System.UriKind.Relative));
            this.LayoutRoot = ((System.Windows.Controls.Grid)(this.FindName("LayoutRoot")));
            this._previewRect = ((System.Windows.Shapes.Rectangle)(this.FindName("_previewRect")));
            this._previewVideo = ((System.Windows.Media.VideoBrush)(this.FindName("_previewVideo")));
            this._previewTransform = ((System.Windows.Media.CompositeTransform)(this.FindName("_previewTransform")));
            this._focusButton = ((System.Windows.Controls.Button)(this.FindName("_focusButton")));
        }
    }
}
