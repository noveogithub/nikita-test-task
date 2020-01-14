import { createAction } from "@reduxjs/toolkit";

import { IPreview } from "@app/types/IPreview";

export const previewJob = createAction<IPreview>('@@JOBS/PREVIEW')