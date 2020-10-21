var RxConfig = (function() {
    'use strict';

    /* server connect */
    var gui360URL = "rxweb/";

var baseURL = "http://TERJEWIN10/";
    //+ gui360URL;
    //var baseURL = "http://localhost:9000/";

    var baseURLBin = baseURL + "RxBinWeb/";
    var baseURLWeb = baseURL + "rxweb/";
    var baseURLBinWeb = baseURL + "RxBinweb";
    var customCacheRoot = baseURL + "customcache";
	

    var xmlurl = baseURLBin + "RxCSISAPI.dll?WebClientPublish";
    var xmlurldirect = baseURLBin + "RxCSISAPI.dll";
    var xmlurlmarkup = baseURLBin + "RxCSISAPI.dll?WebClientPublish";
    var opensessionurl = baseURLBin + "RxCSISAPI.dll?OpenSession";
    var openUsessionurl = baseURLBin + "RxCSISAPI.dll?OpenSessionUser";
    var openMsessionurl = baseURLBin + "RxCSISAPI.dll?OpenMarkupSession";
    var closesessionurl = baseURLBin + "RxCSISAPI.dll?CloseSession";
    var xmlurlmarkupsave = baseURLBin + "RxCSISAPI.dll?WebClientSaveMarkup";
    var FileuploadURL = baseURLBin + "RxCSISAPI.dll?WebClientFileUpload";
    var PDFExportURL = baseURLBin + "RxCSISAPI.dll?WebClientSaveAs";
    var CanvasSaveUrl = baseURLBin + "RxCSISAPI.dll?WebClientSaveImageAs";
    var UploadServerfolder = "C:\\Rasterex\\Upload\\";
    var UploadServerfolderd = "C:\\\\Rasterex\\\\Upload\\\\";
    var xmlurlrel = baseURLBinWeb;
    var xmlurlrelmarkup = baseURLBinWeb;
    var uploadfolderURL = baseURLWeb + "Upload/";
    var htmlviewerurl = baseURLWeb + "default.htm";
    var splashscreen = baseURL + "rxweb/bim/img/welcome_blank.jpg";
    var noteImgSrc = baseURL + "rxweb/images/note.png";
    var PDFcmap = baseURLWeb + "pdfjs/web/cmaps/";

    var baseFileURL = "C:\\\\Rasterex\\\\Upload\\\\";

    /* config */

    //"http://viewserver.rasterex.com/RxBinweb/RxCSISAPI.dll?WebClientGetConfig";

    var configurationLocation = baseURLBin + "RxCSISAPI.dll?WebClientGetConfig";
    var bGetconfig = true;
    var bUseID = false;
    var noCachFolder = false;

    return {
        xmlurl: xmlurl,
	      xmlurldirect : xmlurldirect,
        xmlurlmarkup : xmlurlmarkup,
        opensessionurl: opensessionurl,
	      openUsessionurl : openUsessionurl,
        openMsessionurl: openMsessionurl,
        closesessionurl: closesessionurl,
        xmlurlmarkupsave: xmlurlmarkupsave,
        FileuploadURL: FileuploadURL,
        PDFExportURL: PDFExportURL,
        CanvasSaveUrl: CanvasSaveUrl,
        UploadServerfolder: UploadServerfolder,
        UploadServerfolderd: UploadServerfolderd,
        baseFileURL: baseFileURL,
        baseURLWeb : baseURLWeb,
        xmlurlrel: xmlurlrel,
        xmlurlrelmarkup : xmlurlrelmarkup,
        uploadfolderURL: uploadfolderURL,
        htmlviewerurl: htmlviewerurl,
        splashscreen: splashscreen,
        noteImgSrc : noteImgSrc,
        PDFcmap : PDFcmap,
        bGetconfig: bGetconfig,
        bUseID : bUseID,
        noCachFolder : noCachFolder,
        configurationLocation: configurationLocation
    };

})();
