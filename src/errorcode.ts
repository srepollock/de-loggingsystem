/**
 * Error codes
 */
export enum ErrorCode {
    OK = 0,
    EngineFailed = 1,
    Error, // General Errors
    DocumentUndefined,
    EngineInitialization = 100, // Engine Errors
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
    MessageSystemInitialization = 200, // MessageSystem Errors
    MessageSystemUndefined,
    DuplicateListener,
    UnsubscribeFailed,
    MessageRecieverNotFound,
    FailedAddingListener,
    ListenerUndefined,
    BrowserWindowUndefined = 300, // BrowserWindow Errors
    BrowserWindowDidNotClose,
    SceneUndefined = 400, // Scene Errors
    SceneNameUndefined,
    SceneManagerUndefined,
    SceneManagerCleanupFailed,
    EntityInitialization = 500, // Entity Errors
    EntityParentUndefined,
    EntityAlreadyHasChild,
    EntityAlreadyHasComponent,
    EntityChildNotFound,
    EntityComponentNotFound,
    RenderSystemUndefined = 600, // RenderSystem Errors
    RenderSystemInitializationFailed,
    CanvasNotFound,
    RenderSystemCleanupFailed,
    WindowUndefined, // Window Errors
    GameWindowUndefined,
    PhysicsSystemUndefined = 700, // Physics Errors
    AssetLoaderUninitialized = 800, // AssetLoader
    AssetManagerUndefined,
    NoFileExtension,
    ErrorLoadingFile, // Helper Function Errors
    ReadJSONFile,
    WriteJSONFile,
    FileContentsNotRead,
}