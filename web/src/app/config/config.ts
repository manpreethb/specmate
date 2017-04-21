export class Config {

    public static URL_BASE = 'services/rest/';
    public static URL_CONTENTS = '/list';
    public static URL_ELEMENT = '/details';
    public static URL_DELETE = '/delete';


    public static CEG_NODE_WIDTH: number = 150;
    public static CEG_NODE_HEIGHT: number = 57;
    public static CEG_NODE_ARC_DIST: number = 17 + Math.sqrt((Config.CEG_NODE_WIDTH / 2.0) * (Config.CEG_NODE_WIDTH / 2.0) + (Config.CEG_NODE_HEIGHT / 2.0) * (Config.CEG_NODE_HEIGHT / 2.0));

    public static CEG_MODEL_BASE_ID = 'model';
    public static CEG_NEW_MODEL_NAME = 'New Model';
    public static CEG_NEW_MODEL_DESCRIPTION = '';

    public static CEG_NODE_BASE_ID = 'node';
    public static CEG_NEW_NODE_NAME: string = 'New Node';
    public static CEG_NEW_NODE_DESCRIPTION: string = '';
    public static CEG_NEW_NODE_X: number = 100;
    public static CEG_NEW_NODE_Y: number = 100;
    public static CEG_NODE_NEW_TYPE: string = 'AND';
    public static CEG_NODE_NEW_VARIABLE: string = 'variable';
    public static CEG_NODE_NEW_OPERATOR: string = '=';
    public static CEG_NODE_NEW_VALUE: string = '0';

    public static CEG_CONNECTION_BASE_ID = 'conn';
    public static CEG_NEW_CONNECTION_NAME: string = 'New Connection';
    public static CEG_NEW_CONNECTION_DESCRIPTION: string = '';

    public static CEG_EDITOR_HEIGHT: number = (isNaN(window.innerHeight) ? window['clientHeight'] : window.innerHeight) * 0.75;
    public static CEG_EDITOR_WIDTH: number = 1000;

    public static CEG_EDITOR_DESCRIPTION_ROWS: number = 9;

    // The separator to separate strings from id-numbers. Must not be included in the allowed chars.
    public static ID_SEP = '-';
    public static ID_ALLOWED_CHARS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z', '_'];
    public static ID_FORBIDDEN_REPLACEMENT = '_';
    public static ID_MIN = 1;
}