export type PropertyKey = string

export interface NumberProps<A> {
  default?: A
  min?: A
  max?: A
  randomizable?: boolean
}

export interface StringProps {
  multiline?: boolean
  dynamic_prompt?: boolean
}

export interface BoolProps {
  default?: boolean
}

export interface InputType {
  BOOL: [boolean, BoolProps]
  INT: [number, NumberProps<number>]
  FLOAT: [number, NumberProps<number>]
  STRING: [string, StringProps]
}

export const FlowPropsArray = [ 
  "MODEL", 
  "CONDITIONING", 
  "LATENT", 
  "CLIP", 
  "VAE", 
  "IMAGE", 
  "MASK", 
  "CLIP_VISION", 
  "STYLE_MODEL", 
  "CLIP_VISION_OUTPUT", 
  "CONTROL_NET", 
  "GLIGEN", 
  "UPSCALE_MODEL", 
  "SAMPLER", 
  "SIGMAS",
  "IMAGEUPLOAD"
] as const;
export type FlowPropsKey = typeof FlowPropsArray[number]
export type FlowProps = [FlowPropsKey];
// export type FlowProps = 'MODEL' | 'CONDITIONING' | 'CLIP' | 'IMAGE' | 'LATENT' | 'CONTROL_NET' | 'MASK' | 'VAE'

type Parameter<K extends keyof InputType> = [K, InputType[K][1]]

export type Input = Parameter<keyof InputType> | [string[]] | [string[], {image_upload: boolean}] | FlowProps

export const Input = {
  isBool(i: Input): i is Parameter<'BOOL'> {
    return i[0] === 'BOOL'
  },

  isInt(i: Input): i is Parameter<'INT'> {
    return i[0] === 'INT'
  },

  isFloat(i: Input): i is Parameter<'FLOAT'> {
    return i[0] === 'FLOAT'
  },

  isString(i: Input): i is Parameter<'STRING'> {
    return i[0] === 'STRING'
  },

  isList(i: Input): i is [string[]] {
    return Array.isArray(i[0])
  },

  isModel(i: Input): i is FlowProps {
    return i[0] === 'MODEL'
  },

  isControlNet(i: Input): i is FlowProps {
    return i[0] === 'CONTROL_NET'
  },

  isClip(i: Input): i is FlowProps {
    return i[0] === 'CLIP'
  },
  
  isImage(i: Input): i is FlowProps {
    return i[0] === 'IMAGE'
  },

  isLatent(i: Input): i is FlowProps {
    return i[0] === 'LATENT'
  },

  isMask(i: Input): i is FlowProps {
    return i[0] === 'MASK'
  },

  isVae(i: Input): i is FlowProps {
    return i[0] === 'VAE'
  },

  isImageUpload(i: Input): i is FlowProps {
    return i[0] === 'IMAGEUPLOAD'
  },

  isConditioning(i: Input): i is FlowProps {
    return i[0] === 'CONDITIONING'
  },

  isParameterOrList(i: Input): boolean {
    return Input.isBool(i) || Input.isInt(i) || Input.isFloat(i) || Input.isString(i) || Input.isList(i) || Input.isImageUpload(i)
  },
  getInputColor(i: Input): string {
    // GREEN
    if (Input.isModel(i) || Input.isVae(i)) {
      return '#77C781'
    }
    // PURPLE
    if (Input.isClip(i) || Input.isString(i)) {
      return '#B35CC2'
    }
    // BLUE
    if (Input.isLatent(i) || Input.isImage(i)) {
      return '#67BCBE'
    }
  
    // YELLOW
    return '#C28161'
  }
}
