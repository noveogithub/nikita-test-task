import { createAction } from "@reduxjs/toolkit";

import { IPreview } from "../../types/IPreview";

export const previewJob = createAction<IPreview>('@@JOBS/PREVIEW')