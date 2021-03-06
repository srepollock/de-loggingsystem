/**
 * Error codes
 */
export enum ErrorCode {
    OK = 0,
    Error = 1,
    DocumentUndefined,
    NoName,
    EngineInitialization = 100,
    EngineFailed,
    EngineInstanceNull,
    EngineInstanceNotNull,
    EngineInstanceUndefined,
    EngineClientNotSet,
    EngineWindowUndefined,
    EngineStartedEarly,
    EngineRunning,
    EngineNotRunning,
    EngineCleanupFailed,
    ContainerUndefined,
    WebGLNotInitialized,
    DataTypeNotRecognized,
    MessageSystemInitialization = 200,
    MessageSystemUndefined,
    DuplicateListener,
    UnsubscribeFailed,
    MessageRecieverNotFound,
    FailedAddingListener,
    ListenerUndefined,
    BrowserWindowUndefined = 300,
    BrowserWindowDidNotClose,
    ZoneUndefined = 400,
    ZoneHasNoObjects,
    ZoneDoesNotExist,
    ZoneID,
    ZoneDescription,
    SceneUndefined,
    SceneNameUndefined,
    SceneManagerUndefined,
    SceneManagerCleanupFailed,
    EntityInitialization = 500,
    EntityParentUndefined,
    EntityAlreadyHasChild,
    EntityAlreadyHasComponent,
    EntityChildNotFound,
    EntityComponentNotFound,
    NoPosition,
    NoStartPosition,
    NoEndPosition,
    NoDirection,
    NoPlayerCollisionComponentName,
    NoGroundCollisionComponentName,
    NoEnemyCollisionComponentName,
    NoFlagCollisionComponentName,
    RenderSystemUndefined = 600,
    RenderSystemInitializationFailed,
    CanvasNotFound,
    CanvasNotDefined,
    ShaderType,
    ShaderLoad,
    WebGLBuffer,
    WebGLBufferNotCreated,
    WebGLProgram,
    RenderSystemCleanupFailed,
    SceneNotFound,
    SceneNotActive,
    SceneTimedOut,
    SpriteNotAttached,
    GLUtilityNotInitialized,
    NoAnimatedSpriteName,
    NoFrameWidth,
    NoFrameHeight,
    NoFrameCount,
    NoFrameSequence,
    PhysicsSystemUndefined = 700,
    NoShape,
    NoShapeType,
    ShapeNotAllowed,
    NoRadius,
    NoWidth,
    NoHeight,
    SoundSystemUndefined = 900,
    SoundName,
    WindowUndefined = 900,
    GameWindowUndefined,
    NotElectronWindow,
    IOSystemUndefined = 1000,
    AssetLoaderUninitialized = 1100,
    AssetManagerUndefined,
    NoFileExtension,
    JSONDataUndefined,
    LoadAssetFailed,
    NoAssetName,
    FileTypeNotAcceptable,
    AssetManagerDidNotGetAsset,
    TextureNotLoaded,
    ErrorLoadingFile,
    ReadJSONFile,
    WriteJSONFile,
    FileContentsNotRead,
    MissingTypeBuilder,
    TypeUndefined,
    NoActions,
    NoCursor,
    NoButtons,
}